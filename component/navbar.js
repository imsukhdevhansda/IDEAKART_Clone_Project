
let navbar = ()=>{

    return `<nav id="navbar">
    <div id="part1">
        <h2> <a href="/">IDEAKART</a> </h2>
        <div>
        <input type="text" id="search_books" placeholder="Search">
        <button onclick ="searchBookData ()" id="search_btn">Search</button>
    </div>
    </div>

    <div id="part2">
        <h3> <a href="../FE/about_us.html">About</a>  </h3>
        <h3> <a href="">Contact</a>  </h3>
        <h3> <a href="../FE/signin.html">Sign In </a> </h3>
        <h3> <a href="../FE/signup.html">Sign Up</a>  </h3>
    </div>
</nav>`
}

export default navbar