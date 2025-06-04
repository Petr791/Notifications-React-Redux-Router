import React from "react"
import { createRoot } from "react-dom/client"
import { createStore, combineReducers, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import { thunk } from "redux-thunk"
import { composeWithDevTools } from "@redux-devtools/extension"

import {
	
	RouterProvider,
	createHashRouter,
} from "react-router-dom"
import "./api/mock-server.js"
import "./main.css"
import "./reset.css"

import { notificationsReducer } from "./pages/notificationsPage/reducer.js"
import { noteReducer } from "./pages/noticePage/reducer.js"

import ErrorPage from "./ErrorPage.jsx"
import NotFoundPage from "./pages/notFoundPage/NotFoundPage.jsx"
import MainPage from "./pages/mainPage/MainPage.jsx"
import HomePage from "./pages/homePage/HomePage.jsx"
import NotificationsPage from "./pages/notificationsPage/NotificationsPage.jsx"
import NotificationsListPage from "./pages/notificationsListPage/NotificationsListPage.jsx"
import NoticePage from "./pages/noticePage/Notice.jsx"
import { BuildForExternalPage, BuildForOutletPage } from "./pages/buildPage/BuildPage.jsx"


const rootReducer = combineReducers({
	notifications: notificationsReducer,
	note: noteReducer
});

const store = createStore(rootReducer, undefined, composeWithDevTools(applyMiddleware(thunk)));



const router = createHashRouter([
	{
	  path: "/",
	  element: <MainPage />,
	  children: [
		 {
			index: true,
			element: <HomePage />,
		 },
		 {
			path: "profile/notifications",
			element: <NotificationsPage />,
			children: [
			  {
				 index: true,
				 element: <NotificationsListPage />,
			  },
			  {
				 path: "recommendation/:id",
				 element: <NoticePage />,
			  },
			],
		 },
		 {
			path: "profile/:id",
			element: <BuildForOutletPage />,
		 },
	  ],
	},
	{
	  path: "/moskva/:id",
	  element: <BuildForExternalPage />,
	},
	{
	  path: "/:id",
	  element: <BuildForExternalPage />,
	},
	{
	  path: "/order/:id",
	  element: <BuildForExternalPage />,
	},
	{
	  path: "/not-found",
	  element: <NotFoundPage />,
	},
	{
	  path: "*",
	  element: <NotFoundPage />,
	},
 ], {
	errorElement: <ErrorPage />,
 });
 

 createRoot(document.getElementById('root')).render(
	<React.StrictMode>
	  <Provider store={store}>
		 <RouterProvider router={router} basename="/Notifications-React-Redux-Router" />
	  </Provider>
	</React.StrictMode>,
 )
