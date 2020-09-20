import React,{ useState,useEffect} from 'react';
import './App.css';
import Editor from './components/Editor';
import UseLocalStorage from './Hooks/UseLocalStorage';


function App() {
  const [html,setHtml] = UseLocalStorage('html','')
  const [css,setCss] = UseLocalStorage('css','')
  const [js,setJs] = UseLocalStorage('js','')
  const [srcDoc, setSrcDoc] = useState('')


  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js])

  return (
    <div className="App">
     <>
     <div className="pen pen-top">
       <Editor
         language = "xml"
         displayName = "HTML"
         value = {html}
         onChange = {setHtml}

       />
       <Editor
         language = "css"
         displayName = "CSS"
         value = {css}
         onChange = {setCss}
       />
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />
     </div>
     <div className="pen">
       <iframe 
       srcDoc={srcDoc}
       title = 'output' 
       sandbox = 'allow-scripts'
       frameborder="0"
       width= '100%'
       height='100%'
        
       />

       
     </div>
     </>
    </div>
  );
}

export default App;
