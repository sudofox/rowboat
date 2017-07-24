import { h, render, Component } from 'preact';
import PageHeader from './page_header';
import GuildsTable from './guilds_table';
import state from '../state';


class DashboardGuildsList extends Component {
  constructor() {
    super();
    this.state = {guilds: null};
  }

  componentWillMount() {
    state.withUser((user) => {
      user.getGuilds((guilds) => {
        this.setState({guilds});
      });
    });
  }

  render(props, state) {
    return (
      <div class="panel panel-default">
        <div class="panel-heading">
          Guilds
        </div>
        <div class="panel-body">
          <GuildsTable guilds={state.guilds}/>
        </div>
      </div>
    );
  }
}

class Dashboard extends Component {
  render(props, state) {
		return (
      <div>
        <PageHeader name="Dashboard" />
        <div class="row">
          <div class="col-lg-12">
            <DashboardGuildsList />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
