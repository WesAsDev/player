const fileInput = document.querySelector('.musicInput');
const musica = document.querySelector('.musica');
const audioCtx = new AudioContext();

const botao = document.querySelector('.testeButton');

var context = new AudioContext();

function updateBuffer(arrbuf){
    console.log(arrbuf)
        const bb = new Blob(arrbuf)
        musica.src = window.URL.createObjectURL(bb)
}

fileInput.addEventListener('change', e=>{
    console.dir(musica);
    const fd = new FormData();
    
    fd.append('data',e.target.files[0])
    const file = e.target.files[0];
    console.log(file)
    const buffer = [];

    fetch('http://192.168.0.184:3333/user',{
        method:'POST',
        body:fd

    }).then(res=>{
        console.log()
        // res.blob().then(b=>{
        //     console.log(b)
        //     musica.src = window.URL.createObjectURL(b);
        // })
        console.log(res.body)
        const reader = res.body.getReader();

        function rea(re){
            re.read().then(t=>{
                console.log(t)
    
                if(t.done){
                    console.log(buffer)
                    return
                }

                
                console.log(t.value.buffer)
                buffer.push(t.value.buffer)
                // audioCtx.decodeAudioData(t.value.buffer)
                updateBuffer(buffer);
                rea(re);
            })
        }
        
        rea(reader);
        
        context.decodeAudioData(t.value)

        console.log(res.file)
    })
})
