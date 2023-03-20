import '../css/login.css';
import {crea_ora} from './login_db';

const Change_Tasto = (e) => {
  let psw = document.getElementById('psw');
  if (e.target.id !== 'C'){
    psw.value = psw.value + e.target.id;
  } else{
    psw.value = '';
  }
};

const cambio_oper = (e) => {
  let psw = document.getElementById('psw');
  psw.value = '';
};

function Login(){
    return (
      <>
        <div id='main'>
            <div className='login'>
                <div className='operatori'>
                  <div className='form-floating w-100'>
                    <select className='form-select' id='form_operatore' name='operatore' onChange={cambio_oper}>
                      <option id='1'>Operatore 1</option>
                      <option id='2'>Operatore 2</option>
                    </select>
                    <label for='form_operatore'>Seleziona Operatore</label>
                  </div>
                  <div className='form-floating w-100'>
                    <input className='form-control' type='password' autoFocus id='psw'></input>
                    <label for='psw'>Password Operatore</label>
                  </div>
                  <div className='conferma w-100'>                    
                    <button className='btn btn-danger'>Chiudi</button>
                    <button className='btn btn-success btn-lg'>Accedi</button>
                  </div>
                </div>
                <div className='tastiera'>                  
                  <button type='button' className='btn btn-light tasto' id='7' onClick={Change_Tasto}>7</button>
                  <button type='button' className='btn btn-light tasto' id='8' onClick={Change_Tasto}>8</button>
                  <button type='button' className='btn btn-light tasto' id='9' onClick={Change_Tasto}>9</button>
                  <button type='button' className='btn btn-light tasto' id='4' onClick={Change_Tasto}>4</button>
                  <button type='button' className='btn btn-light tasto' id='5' onClick={Change_Tasto}>5</button>
                  <button type='button' className='btn btn-light tasto' id='6' onClick={Change_Tasto}>6</button>
                  <button type='button' className='btn btn-light tasto' id='1' onClick={Change_Tasto}>1</button>
                  <button type='button' className='btn btn-light tasto' id='2' onClick={Change_Tasto}>2</button>
                  <button type='button' className='btn btn-light tasto' id='3' onClick={Change_Tasto}>3</button>
                  <button type='button' className='btn btn-light tasto' id='0' onClick={Change_Tasto}>0</button>
                  <button type='button' className='btn btn-light tasto' id='00' onClick={Change_Tasto}>00</button>
                  <button type='button' className='btn btn-danger tasto' id='C' onClick={Change_Tasto}>C</button>                  
                </div>
            </div>
        </div>
        <footer>
          <div>
            <h3>INFO & TEL SRL</h3>
          </div>
          <div>
            <h4>Cassiere <span>Massimo</span></h4>            
          </div>
          <div>
            <h4>Cassa <span>001</span></h4>            
          </div>
          <div>
            <h4 id="orologio">{crea_ora()}</h4>
          </div>
        </footer>
      </>        
    );
}

export default Login;