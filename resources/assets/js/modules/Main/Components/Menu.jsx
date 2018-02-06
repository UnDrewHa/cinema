import find from 'lodash/find';
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import { menu } from '../../../base/settings';

function generateItem(item) {
    return (
        <Menu.Item key={item.key}>
            <Link to={item.link}>
                {item.icon && <Icon type={item.icon} />}
                {item.label}
                </Link>
        </Menu.Item>
    );
}

function generateItemWithSubs(item) {
    return (
        <Menu.SubMenu key={item.key} title={
            <span>
                {item.icon && <Icon type={item.icon} />}
                {item.label}
            </span>}>
            {
                item.items.map((item) => generateItem(item))
            }
        </Menu.SubMenu>
    );
}

export function MainMenu(props) {
    let {selectedKey} = props;
    return (
        <Menu
            {...menu}
            selectedKeys={[selectedKey]}
        >
            {
                menu.items.map((item, index) => {
                    const Item = item.items ?
                        generateItemWithSubs(item) :
                        generateItem(item);
                    
                    return Item;
                })
            }
        </Menu>
    );
}