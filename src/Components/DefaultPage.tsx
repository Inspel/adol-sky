import React from 'react';
//@ts-ignore
import { BaseLayout } from '../Layouts/BaseLayout';
import { ContentRoute } from './ContentRoute';
import { Logo } from './Logo';
import { MainMenu } from './MainMenu';
import { UserMenu } from './UserMenu';

export const DefaultPage = () => {
    const logo = <Logo />;
    const mainMenu = <MainMenu />;
    const userMenu = <UserMenu />;
    const content = <ContentRoute />
    
    return (
        <BaseLayout logo={logo} mainMenu={mainMenu} userMenu={userMenu} content={content} />
    )
}