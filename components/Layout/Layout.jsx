import MainNavigation from "./Main-navigation"

function Layout(props){
    return(
        <>
            <MainNavigation/>
            <main>
                {props.children}
            </main>
        </>
    )
}

export default Layout