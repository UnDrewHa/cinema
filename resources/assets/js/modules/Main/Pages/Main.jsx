import React from 'react';
import {
    Link,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import { MainMenu } from '../Components/Menu';
import { Cinemas } from '../../Cinemas/Pages/Cinemas';
import { Halls } from '../../Halls/Pages/Halls';
import { HallEdit } from '../../Halls/Pages/HallEdit';
import { Actors } from '../../Actors/Pages/Actors';
import { Directors } from '../../Directors/Pages/Directors';
import { Genres } from '../../Genres/Pages/Genres';
import { Countries } from '../../Countries/Pages/Countries';
import { FilmFormats } from '../../FilmFormats/Pages/FilmFormats';
import { AgeLimits } from '../../AgeLimits/Pages/AgeLimits';
import { Films } from '../../Films/Pages/Films';
import { FilmEdit } from '../../Films/Pages/FilmEdit';
import { Licenses } from '../../Licenses/Pages/Licenses';
import { LicenseEdit } from '../../Licenses/Pages/LicenseEdit';

const {Header, Content, Footer, Sider} = Layout;

export class Main extends React.Component {
    state = {
        collapsed: false,
    };
    
    handleToggleSidebar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    
    render() {
        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                    width={270}
                >
                    <div className="logo" />
                    <MainMenu selectedKey={this.props.location.pathname}/>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}/>
                    <Content style={{ margin: '24px', padding: 24, background: '#fff' }}>
                        <div style={{background: '#fff', padding: 24}}>
                            <Switch>
                                <Route exact path="/" render={() => <Redirect to="/cinemas" />} />
                                <Route path="/cinemas" component={Cinemas} />
                                <Route path="/halls" component={Halls} />
                                <Route path="/hall/edit/:id" component={HallEdit} />
                                <Route path="/hall/create" component={HallEdit} />
                                <Route path="/actors" component={Actors} />
                                <Route path="/directors" component={Directors} />
                                <Route path="/genres" component={Genres} />
                                <Route path="/countries" component={Countries} />
                                <Route path="/film-formats" component={FilmFormats} />
                                <Route path="/age-limits" component={AgeLimits} />
                                <Route path="/films" component={Films} />
                                <Route path="/film/edit/:id" component={FilmEdit} />
                                <Route path="/film/create" component={FilmEdit} />
                                <Route path="/licenses" component={Licenses} />
                                <Route path="/license/edit/:id" component={LicenseEdit} />
                                <Route path="/license/create" component={LicenseEdit} />
                            </Switch>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}