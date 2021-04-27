import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from '../components/Header'
import ErrorPage from '../pages/ErrorPage'
import FeedPage from '../pages/FeedPage'
import LoginPage from '../pages/LoginPage'
import PostPage from '../pages/PostPage'
import SignUpPage from '../pages/SignUpPage'

const Router = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path='/login'>
                    <LoginPage/>
                </Route>

                <Route exact path='/cadastro'>
                    <SignUpPage/>
                </Route>

                <Route exact path='/'>
                    <FeedPage/>
                </Route>

                <Route exact path='/post'>
                    <PostPage/>
                </Route>

                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router