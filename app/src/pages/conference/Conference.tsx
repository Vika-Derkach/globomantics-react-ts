import * as React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { AboutUs } from "./AboutUs";
import ErrorBoundary from "./ErrorBounary";
import { Navigation } from "./Navigation";
import { AddSession } from "./sessions/AddSession";
import { Session } from "./sessions/Session";
import { Sessions } from "./sessions/Sessions";
import { Speaker, Speakers } from "./Speakers";
import "./style-sessions.css";

export function Conference() {
  const { path } = useRouteMatch();
 
  return (
    <ErrorBoundary>
      <Switch>
        <Route path={`${path}/sessions/new`}>
          <AddSession />
        </Route>
        <Route path={`${path}/sessions/:session_id`}>
          <Session />
        </Route>
        <Route path={`${path}/speakers/:speaker_id`}>
          <Speaker />
        </Route>
        <Route path={`${path}/speakers`}>
          <Speakers />
        </Route>
        <Route path={`${path}/sessions`}>
          <Sessions />
        </Route>
        <Route path={`${path}/about`}>
          <AboutUs />
        </Route>
        <Route path={`${path}`}>
          <Navigation />
        </Route>
      </Switch>
    </ErrorBoundary>
  );
}
