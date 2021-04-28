import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage'
import FeedPage from '../pages/FeedPage'
import LoginPage from '../pages/LoginPage'
import PostPage from '../pages/PostPage'
import SignUpPage from '../pages/SignUpPage'

const Router = ({setButtonLog}) => {
    return(
            <Switch>
                <Route exact path='/login'>
                    <LoginPage setButtonLog={setButtonLog} />
                </Route>

                <Route exact path='/cadastro'>
                    <SignUpPage setButtonLog={setButtonLog}/>
                </Route>

                <Route exact path='/'>
                    <FeedPage/>
                </Route>

                <Route exact path='/posts'>
                    <PostPage/>
                </Route>

                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>
    )
}

export default Router