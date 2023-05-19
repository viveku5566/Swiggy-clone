{<script>
    const heading = React.createElement("h1",{},"Hello React!"); // accepts three argumemnts

    const root = ReactDOM.createRoot(document.getElementById("root")); // responsible for render the whole react elements

    root.render(heading);
</script> }

 const parent = React.createElement("div",{id:parent},
 React.createElement("div",{id:child},
 [React.createElement("h1",{},"   I'm h1 Tag"),
 React.createElement("h2",{},"   I'm h2 Tag")]),

 React.createElement("div",{id:child2},
 [React.createElement("h1",{},"   I'm h1 Tag"),
 React.createElement("h2",{},"   I'm h2 Tag")])
 );

 const root = React.DOM.createRoot(document.getElementById('root'));
 
 root.render(parent);



