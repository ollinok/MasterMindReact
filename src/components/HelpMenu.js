import helpPic from '../img/Help.PNG';
import whiteMarkerPic from '../img/whiteMarker.PNG';
import blackMarkerPic from '../img/blackMarker.PNG';

const HelpSplash = ({ show }) => {
  return (
    <div
      id='help-splash'
      className='splash-div flex-column'
      onClick={show}>
        <div className='center-text' style={{ paddingTop: '0' }}>
          <span className='big-text'>Goal:</span><br/>
          <span>Figure out the correct combination of 4 colors. The order matters. Multiple appearances of the same color is possible.</span>
        </div>
        <div className='center-text'>
          <span className='big-text'>Hints:</span><br/>
          <span>Based on the colors you submitted, you will receive hints on the left side of the screen indicating how many of them are correct.</span><br/>
          <img
            src={helpPic}
            alt='Marker help'
            style={{
              width: '260px',
              paddingTop: '10px' }}>
          </img>
        </div>
        <div className='helpmenu-markers'>
          <img
            src={blackMarkerPic}
            alt="Black marker help"
            style={{
              width: '50px',
              height: '50px',
              margin: 'auto',
              paddingLeft: '10px',
              paddingRight: '5px' }}>  
          </img>
          <span>Black marker indicates a correct color in the correct position.</span>
        </div>
        <div className='helpmenu-markers'>
          <img
            src={whiteMarkerPic}
            alt="White marker help"
            style={{
              width: '50px',
              height: '50px',
              margin: 'auto',
              paddingLeft: '10px',
              paddingRight: '5px' }}>  
          </img>
          <span>White marker indicates a correct color in the wrong position.</span>
        </div>
        <div className='center-text'>
          <span>The order in which the black and white markers are presented is not relevant regarding the correct answer.</span>
        </div>
    </div>
  );
};

const HelpMenu = (props) => {
  return (
    <>
      <div id='help'>
        <button
          className='help-button'
          onClick={props.show}>
            ?
        </button>
      </div>
      {props.status &&
        <HelpSplash
          show={props.show}
        />
      }
    </>
  );
};

export default HelpMenu;