<template>
<div class="con">
<span class="operation" v-for="(item, index) in permission" :Key="index">
  <mu-button color="info" v-if="item == 'add'">新增</mu-button>
  <mu-button color="error" v-if="item == 'edit'">编辑</mu-button>
  <mu-button color="secondary" v-if="item == 'delete'">删除</mu-button>
</span>
  <div class="table">
    <md-table v-model="searched" md-sort="name" md-sort-order="asc" md-card md-fixed-header>
      <md-table-toolbar>
        <div class="md-toolbar-section-start">
          <h1 class="md-title">用户信息</h1>
        </div>

        <md-field md-clearable class="md-toolbar-section-end">
          <md-input placeholder="Search by name..." v-model="search" @input="searchOnTable" />
        </md-field>
      </md-table-toolbar>

      <md-table-empty-state
        md-label="No users found"
        :md-description="`No user found for this '${search}' query. Try a different search term or create a new user.`">
        <md-button class="md-primary md-raised" @click="newUser">Create New User</md-button>
      </md-table-empty-state>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Email" md-sort-by="email">{{ item.email }}</md-table-cell>
        <md-table-cell md-label="Gender" md-sort-by="gender">{{ item.gender }}</md-table-cell>
        <md-table-cell md-label="Job Title" md-sort-by="title">{{ item.title }}</md-table-cell>
      </md-table-row>
    </md-table>
    <mu-flex justify-content="center">
    <mu-pagination raised circle :total="1000" :current.sync="current"></mu-pagination>
    </mu-flex>
    </div>
  </div>
</template>

<script>
const toLower = text => {
    return text.toString().toLowerCase()
  }

  const searchByName = (items, term) => {
    if (term) {
      return items.filter(item => toLower(item.name).includes(toLower(term)))
    }

    return items
  }
export default {
 name: 'User',
  data() {
    return {
      search: null,
      searched: [],
      permission: [],
      current: 1,
      users: [
        {
          id: 1,
          name: "Shawna Dubbin",
          email: "sdubbin0@geocities.com",
          gender: "Male",
          title: "Assistant Media Planner"
        },
        {
          id: 2,
          name: "Odette Demageard",
          email: "odemageard1@spotify.com",
          gender: "Female",
          title: "Account Coordinator"
        },
        {
          id: 3,
          name: "Vera Taleworth",
          email: "vtaleworth2@google.ca",
          gender: "Male",
          title: "Community Outreach Specialist"
        },
        {
          id: 4,
          name: "Lonnie Izkovitz",
          email: "lizkovitz3@youtu.be",
          gender: "Female",
          title: "Operator"
        },
        {
          id: 5,
          name: "Thatcher Stave",
          email: "tstave4@reference.com",
          gender: "Male",
          title: "Software Test Engineer III"
        },
      ]
    }
  },
  components: {},
  created() {
    this.searched = this.users
    this.permission = this.$store.state.menuList1[1].subMenus[0].permissions
    console.log(permission)
  },
  mounted() {},
  methods: {
    newUser () {
        window.alert('Noop')
      },
      searchOnTable () {
        this.searched = searchByName(this.users, this.search)
      }
  },
  computed: {}
}
</script>

<style scoped lang="scss">
  .con {
    width: 100%;
  }

  .md-field {
    max-width: 300px;
  }

  .table {
    width: 100%;
    justify-content: center;
    padding: 20px 20px;
  }

  .md-table {
    max-height: 400px;
    width: 100%;
    margin-bottom: 20px;
  }

  .operation {
    display: inline-block;
    margin: 20px 20px;
    .mu-button {
       margin-right: 10px;
    }
  }
</style>
