import { useState } from 'react';
import Navbar from '../../components/navbar/navbar';
import Sidebar from '../../components/sidebar/sidebar';
import './new.scss';
const New = ({ inputs, title }) => {
  const [file, setFile] = useState('');
  console.log(file);
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1 className="title">{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : 'https://img.icons8.com/material/96/null/no-image.png'
              }
              alt="no"
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image:
                  <img
                    className="upload"
                    src="https://img.icons8.com/ios-filled/50/000000/submit-progress.png"
                    alt="upload"
                  />
                </label>
                <input
                  onChange={(e) => setFile(e.target.files[0])}
                  type="file"
                  id="file"
                  style={{ display: 'none' }}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}

              <button>SEND</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default New;
