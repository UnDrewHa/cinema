import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import { menu } from '../../../base/settings';

function generateItem(item, index) {
    return (
        <Menu.Item key={index}>
            {item.icon && <Icon type={item.icon} />}
            <Link to={item.link}>{item.label}</Link>
        </Menu.Item>
    );
}

function generateItemWithSubs(item, index) {
    return (
        <Menu.SubMenu key={index} title={
            <span>
                {item.icon && <Icon type={item.icon} />}
                {item.label}
            </span>}>
            {
                item.items.map((item, index) => generateItem(item, `sub-${index}`))
            }
        </Menu.SubMenu>
    );
}

export function MainMenu(props) {
    return (
        <Menu {...menu}>
            {
                menu.items.map((item, index) => {
                    const Item = item.items ?
                        generateItemWithSubs(item, index) :
                        generateItem(item, index);
                    
                    return Item;
                })
            }
        </Menu>
    );
}