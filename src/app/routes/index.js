import React from "react"
import { Route, Switch, withRouter } from "react-router-dom"
import asyncComponent from "../../util/asyncComponent"

const Routes = ({ match }) => (
  <Switch>
    <Route
      exact
      path={`${match.url}`}
      component={asyncComponent(() => import("./LandingPage"))}
    />
    
    <Route
      exact
      path={`${match.url}app/pool`}
      component={asyncComponent(() => import("./Pool"))}
    />
    <Route
      exact
      path={`${match.url}app/pool/:id`}
      component={asyncComponent(() => import("./Pool/Details"))}
    />
    <Route
      exact
      path={`${match.url}terms-condition.html`}
      component={asyncComponent(() => import("./termsCondition"))}
    />
    <Route
      exact
      path={`${match.url}privacy-policy.html`}
      component={asyncComponent(() => import("./privacyPolicy"))}
    />
    <Route
      exact
      path={`${match.url}career.html`}
      component={asyncComponent(() => import("./career"))}
    />
    <Route
      exact
      path={`${match.url}GADA_Litepaper.pdf`}
      component={asyncComponent(() => import("./gadaLitepaper"))}
    />
    {/*<Route component={asyncComponent(() => import("app/routes/extraPages/routes/404"))}/>*/}
  </Switch>
)

export default withRouter(Routes)
