import React from "react";
const RemoteApp = React.lazy(() => import("app2/RsApp"));

const App = () => {
    return <div className={'container'}>
        <h1>Host App</h1>
        <React.Suspense fallback={"loading..."}>
            <RemoteApp/>
        </React.Suspense>

    </div>;
};

export default App;
