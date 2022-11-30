import React, { useEffect,useState ,useRef} from 'react'
import Nav from '../components/Nav'

//codemirror import
import '../css/editor.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/theme/rubyblue.css'
import Codemirror from 'codemirror'
import 'codemirror/addon/edit/closetag'
import 'codemirror/addon/edit/closebrackets'

//icon import

import { ImCross } from 'react-icons/im';
export default function Editor() {
    const ref = useRef(null);
    const [codes,setCodes]=useState({
        title: "",
        description:""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCodes({
          ...codes,
          [name]: value,
        });

      };      

    useEffect(()=>{
         function init(){
                Codemirror.fromTextArea(document.getElementById('editor'),{
                mode:{name:'javascript',json: true},
                theme:'rubyblue',
                autoCloseTags:true,
                autoCloseBrackets:true,
                lineNumbers:true,
            })
            
            
        }
        init();
    },[])

    const Submit=()=>{
        
    }
  return (
    <section className='editor_container'>
    <Nav/>
    
        <div className='code_title_wrapper'>
        <input type="text" className='code_title' placeholder='Enter Title' name='title' value={codes.title} onChange={handleChange}></input>
        <h2 className='cross'><ImCross /></h2>
        </div>
        <section className='editor_section'>
        <input type="text"  value={codes.description}  id="editor" ref={ref}></input>
        <div className='side_section'>
            <button className="save" onClick={Submit}>
              Save
            </button>
            
        </div>
        </section>
    </section>
  )
}
