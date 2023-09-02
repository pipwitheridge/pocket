import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AiFillRightCircle } from 'react-icons/ai'; 
import { IoShareOutline } from 'react-icons/io5';
import { BiDotsVerticalRounded } from 'react-icons/bi';

function AppInstallModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const installApp = () => {
    console.log('👍', 'butInstall-clicked');
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      // The deferred prompt isn't available.
      return;
    }
    // Show the install prompt.
    promptEvent.prompt();
    // Log the result
    const result = promptEvent.userChoice;
    console.log('👍', 'userChoice', result);
    // Reset the deferred prompt variable, since
    // prompt() can only be called once.
    window.deferredPrompt = null;
    // Hide the install button.
    divInstall.classList.toggle('hidden', true);
  }

  return (
    <>
     <div style={{alignItems: "center", justifyContent: "center", width: "100%", marginBottom: "40px"}} className="divInstall" class="divInstall">
   <div className="d-flex" onClick={navigator.userAgent.includes("iPhone") ? () => handleShow() : () => installApp() } style={{backgroundColor: "grey", height: 50, padding: "50px", position: "fixed", top: 0, alignContent: "center", alignItems: "center", justifyContent: "space-between", width: "100%", marginBottom: "10px"}}>
    <div className="me-4" style={{color: "white"}}>For a better experience on mobile, install the app.</div>
    <div><AiFillRightCircle size={30} color={"white"}/></div>
  </div>
    </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>How to install</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="d-grid gap-4 mb-5">
            <div>On iPhone:</div>
            <div>• click the <IoShareOutline size={20} /> button in Safari,</div> 
            <div>• then click 'Add to Home Screen'.</div>
            </div>
            <div className="d-grid gap-4 my-3">
            <div>On Android:</div>
            <div>• click the <BiDotsVerticalRounded size={20} /> menu button in Google,</div> 
            <div>• then click 'Add to Home Screen'.</div>
            </div>
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AppInstallModal;