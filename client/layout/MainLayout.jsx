import React from 'react';
import AccountsUI from '../AccountsUI.jsx';
import Footer from '../footer.jsx';
import Menu from './menu/menu.jsx';

export const MainLayout = ({content}) => (
    <div className="main-layout">
        <header>
            <link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro' rel='stylesheet' type='text/css'/>
            <h2><a href="/">My Resolution</a></h2>
            <AccountsUI />
            <Menu />
        </header>
        <main>
            {content}
        </main> 
        <footer>
            <Footer/>
        </footer>
    </div>
)