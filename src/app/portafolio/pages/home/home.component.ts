import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  
  styles: [
    `
      .contenedor-presentacion {
        display: grid;

        height: 100%;
        /* grid-template-columns: repeat(2, 1fr); */
        grid-template-columns: 50% 50%;
        flex-direction: column;
        align-items: center;
      }

      .zIndex{
        z-index:100;
      }
      .contenedor-img {
        display: flex;
        margin-top: 20px;
        justify-content: end;
      }
      .contenedor-titulos {
        display: flex;
        flex-direction: column;
      }
      .img {
        /* border-radius: 100%; */
        width: 60%;
        /* clip-path: ellipse(50% 50% at 50% 50%); */
      }

      .contenedor-presentacion h1 {
        color: rgb(255, 92, 85);
      }
      .contenedor-presentacion h3 {
        font-family: 'Roboto';
        font-weight: 900;
      }
    `,
  ],
})
export class HomeComponent implements OnInit {
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;

  ngOnInit(): void {
    this.myStyle = {
      position: 'fixed',
      width: '100%',
      height: '100%',
      'z-index': -1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    };

    this.myParams = {
      particles: {
        number: {
          value: 30,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: '#ffffff',
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000',
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: 'img/github.svg',
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 1,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 4,
            size_min: 0.3,
            sync: false,
          },
        },
        line_linked: {
          enable: false,
          distance: 150,
          color: '#ffffff',
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          direction: 'none',
          random: true,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 600,
          },
        },
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: false,
            mode: 'grab',
          },
          onclick: {
            enable: true,
            mode: 'repulse',
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 250,
            size: 0,
            duration: 2,
            opacity: 0,
            speed: 3,
          },
          repulse: {
            distance: 400,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    };
  }

  @HostListener('event', ['$event'])
  scrollEfect($event: Event) {
    // let efectoScroll = $event;
    // console.log(`Se hizo ${efectoScroll}`);
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      console.log('hooooola munfo');
    }
  }
}
