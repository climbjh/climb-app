/* eslint-disable no-unused-expressions */
// import { Card, Drawer, Button } from 'antd';
import { hot } from 'react-hot-loader'; // needs to be before react!
import React from 'react';
// import { Account } from '@src/generated';
import { ClimbingArea as Area } from '@src/generated';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

// local
import Home from './pages/Home';
import Profile from './pages/Profile';
import Areas from './pages/Areas';
import Routes from './pages/Routes';
import Climbers from './pages/Climbers';
import Navbar from './components/Navbar';

// example use of file loader to load image
// import bassLogo from '@src/assets/images/bass-logo.jpg';

// interface AppState {
//   acc: Account;
//   drawerVisible: boolean;
// }

const App = () => {
    // constructor(props: any) {
    //   super(props);
    //   this.state = {
    //     acc: null,
    //     drawerVisible: false,
    //   };
    // }

    // public async componentDidMount() {
    //   // example account with contacts query
    //   const accs = await Account.retrieve((fields) => {
    //     return {
    //       select: [
    //         ...fields.select('id', 'name', 'website'),
    //         fields.subQuery('contacts', (cFields) => {
    //           return {
    //             select: cFields.select('id', 'name', 'email', 'phone'),
    //           };
    //         }),
    //       ],
    //       limit: 1,
    //     };
    //   });
    //   if (accs.length > 0) {
    //     this.setState({ acc: accs[0] });
    //   }
    // }
    // const getAreas = () => {
    //     const areas = await Area.retrieve((f) => ({
    //         select: f.select('id', 'name'),
    //     }));
    // };
    // public render() {
    //   return (
    //     <Card title='B.A.S.S.'>
    //       <Drawer
    //         visible={this.state.drawerVisible}
    //         onClose={() => this.setState({drawerVisible: false})}
    //         title='An Account'
    //         width={600}
    //       >
    //         {this.state.acc && this.renderDrawerContent()}
    //       </Drawer>
    //       <img width={300} src={bassLogo} />
    //       <br />
    //       <Button type='primary' onClick={() => this.setState({drawerVisible: true})}>Click Me!</Button>
    //     </Card>
    //   );
    // }

    // private renderDrawerContent = () => {
    //   const { acc } = this.state;

    //   const contactsList = acc.contacts.map((c) => {
    //     return (
    //       <Card type='inner' key={c.id}>
    //         <p><b>Name:</b> {c.name}</p>
    //         <p><b>Email:</b> {c.email}</p>
    //         <p><b>Phone:</b> {c.phone}</p>
    //       </Card>
    //     );
    //   });
    //   return (
    //     <div>
    //       <p><b>Name:</b> {acc.name}</p>
    //       <p><b>Website:</b> {acc.website}</p>
    //       <Card title='Contacts' extra={acc.contacts.length}>
    //         {contactsList}
    //       </Card>
    //     </div>
    //   );
    // }

    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/areas">
                        <Areas />
                    </Route>
                    <Route exact path="/routes">
                        <Routes />
                    </Route>
                    <Route exact path="/climbers">
                        <Climbers />
                    </Route>
                    <Route path="/climbers/:climber_id">
                        <Profile />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </>
    );
};

export default hot(module)(App);
