import React from 'react';
import {
    Link,
    Switch,
    Route
} from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import { MainMenu } from '../Components/Menu';
import { Cinemas } from '../../Cinemas/Pages/Cinemas';
import { Halls } from '../../Halls/Pages/Halls';
import { HallEdit } from '../../Halls/Pages/HallEdit';
import { Actors } from '../../Actors/Pages/Actors';
import { Directors } from '../../Directors/Pages/Directors';
import { Genres } from '../../Genres/Pages/Genres';

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
                    <MainMenu />
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        {/*<Icon*/}
                            {/*className="sider-trigger"*/}
                            {/*type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}*/}
                            {/*onClick={this.handleToggleSidebar}*/}
                        {/*/>*/}
                    </Header>
                    <Content style={{ margin: '24px', padding: 24, background: '#fff' }}>
                        <div style={{background: '#fff', padding: 24}}>
                            <Switch>
                                <Route path="/cinemas" component={Cinemas} />
                                <Route path="/halls" component={Halls} />
                                <Route path="/hall/edit/:id" component={HallEdit} />
                                <Route path="/hall/create" component={HallEdit} />
                                <Route path="/actors" component={Actors} />
                                <Route path="/directors" component={Directors} />
                                <Route path="/genres" component={Genres} />
                            </Switch>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}