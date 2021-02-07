import React, { PureComponent } from 'react';
import WAVES from "vanta/dist/vanta.waves.min";
import NET from "vanta/dist/vanta.net.min";


export default class Background extends PureComponent {
    
    vantaRef= React.createRef()

    componentDidMount() {

      
        this.vantaEffect = NET({
          el: this.vantaRef.current,
            mouseControls: false,
            touchControls: false,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0xafacac,
            backgroundColor: 0xe0e14,
        })

        /*
        this.vantaEffect = WAVES({
          el: this.vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 3.00,
          color: 0x131320
        })/*



      }
    
    
    
    render() {
        return (
            <div id="background" ref={this.vantaRef}>
                
            </div>
        )
    }
}
