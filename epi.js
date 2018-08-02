// core library of the epiSphere project

console.log('epi.js loaded');


// as a constructor, good place for methods with state dependencies
epi=function(){
    this.created=Date()

    // ini
    console.log('ini at '+Date())
    if(typeof(document)=='object'){
        if(document.getElementById('epiSphereDiv')){ // project landing page
            let div=document.getElementById('epiSphereDiv')
            let h = '<hr>'
            h += '<h2><i id="epiSphereCloudIcon" class="fab fa-mixcloud"></i>epiSphere <a href="https://github.com/episphere" target="_blank"><i class="fab fa-github-alt" style="font-size:x-large;color:green"></i></a></h2>'
            h += '<hr>'
            h += '<div><div class="col-lg">'
            h += '<div><p style="font-size:large"><b>Cancer Epidemiology Commons</b><br>For opensource Web-based tools operating cancer epidemiology data in the <a href="https://github.com/episphere" target="_blank">eS Cloud (<i class="fab fa-mixcloud"></i>)</a> open Developer Tools (Chrome preferred) or load library from <a href="https://www.npmjs.com/package/episphere" target="_blank">npm</a>. For more information, including APIs and SDKs for specialized languages such as R and Python, see <a href="https://github.com/episphere/episphere.github.com/wiki" target="_blank">wiki</a>.</p>'
            h += '</div></div>'
            h += '<hr>'
            h += '<div>'
            h += '<ul>'
            h += '<li><a href="https://episphere.github.io/drive" target="_blank">epiDrive</a> [early stage of develoment].</li>'
            h += '<li>Participant app [planning stage].</li>'
            h += '<li>...</li>'
            h += '<ul>'
            h += '</div>'
            div.innerHTML=h
        }
    }
}

// as an object, good place for pure methods
epi.created=Date()
epi.range=(n,f)=>{
    n=n||100;f=f||((_,i)=>i) //defaults
    return Array.apply(null,{length:n}).map(f)
}




// ini
if(typeof(define)!=='undefined'){ // if called as a package
    define(epi)
}else{
    if(typeof(document)!=='undefined'){ // if this is a browser
        epi()
        let icon=document.getElementById("epiSphereCloudIcon")
        let color0=icon.style.color
        epi.blink=setInterval(()=>{
                setTimeout(()=>{
                    icon.style.color='LightBlue'
                    setTimeout(()=>{
                        icon.style.color=color0
                    },500)
                },500)

            },2000)
        icon.onclick=()=>{
            icon.style.color='red'
            clearInterval(epi.blink)
            setTimeout(()=>{
                icon.style.color=color0
            },500)
        }
    }else if(typeof(module)=='object'){
        //exports.hello = () => {
        //    console.log('saying hello …');
        //}
        //exports.Epi=epi
        exports.range=epi.range
        //exports.created=epi.created
        
    }
}
 