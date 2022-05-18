import React from "react";
import FileViewer from 'react-file-viewer';
import { CustomErrorComponent } from 'custom-error';
import filePDF from './GADA_Litepaper.pdf';
import './styles.css';


const GadaLitepaper = () => {
  const onError = (e) => {
    console.log(e, 'error in file-viewer');
  }

  return (
    <div className="content" style={{ margin: '2rem 0rem' }}>
      <section className="gadaLitepaper">
        <div className="container">
        <FileViewer
          fileType={'pdf'}
          filePath={filePDF}
          errorComponent={CustomErrorComponent}
          onError={onError}/>
        </div>
      </section>
    </div>
  );
};

export default GadaLitepaper;
