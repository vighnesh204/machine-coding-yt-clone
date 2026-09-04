import { createBrowserRouter } from "react-router-dom";
import Body from "../components/Body";
import App from "../App";
import WatchPage from "../components/WatchPage";
import MainContainer from "../components/MainContainer";

const appRouter = createBrowserRouter([{
    path: "/",
    element: <App/>,
    children: [
        {
            path: "/",
            element: <Body/>,
            children: [
                {
                    path: "/",
                    element: <MainContainer />
                },
                {
                    path: "/watch",
                    element: <WatchPage/>
                },
                
            ]
        },
    ]
}])

export default appRouter;