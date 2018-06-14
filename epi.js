// core library of the epiSphere project

console.log('epi.js loaded')


// as a constructor, good place for methods with state dependencies
epi=function(){
    this.created=Date()

    // ini
    console.log('ini at '+Date())
    if(document.getElementById('epiSphereDiv')){ // project landing page
        let div=document.getElementById('epiSphereDiv')
        let h = '<h2><i class="fab fa-mixcloud"></i>epiSphere <a href="https://github.com/episphere" target="_blank"><i id="lala" class="fab fa-github-alt" style="font-size:x-large;color:green"></i></a></h2>'
        h += '<hr>'
        h += '<div class="row"><div class="col">'
        h += '<div class="row"><p style="font-size:large"><b>Cancer Epidemiology Commons</b><br>For opensource Web-based tools operating cancer epidemiology data in the <a href="#">eS Cloud</a> open Developer Tools (Chrome preferred) or load library from <a href="#">npm</a>. For more information, including APIs and SDKs for specialized languages such as R and Python, see <a href="#">wiki</a>.</p>'
        h += '</div></div>'
        div.innerHTML=h
    }
}

// as an object, good place for pure methods
epi.created=Date()
epi.range=(n,f)=>{
    n=n||100;f=f||((_,i)=>i) //defaults
    return Array.apply(null,{length:n}).map(f)
}




// ini
epi()

 