import React from "react";

function Layout({ children }) {
    return (
        <div class='container min-h-full min-w-screen-md max-w-screen-md mx-auto mt-12 sm:mt-24 md:mt-32'>
            {children}
        </div>
    )
}

export default Layout;