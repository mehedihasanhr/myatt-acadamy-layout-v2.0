"use client";
import * as React from 'react';
import {usePathname, useRouter} from 'next/navigation'
import './Hero.css';
import { Box } from '@chakra-ui/react';


type DropdownOption = {
  id: string;
  label: string;
  className?: string;
  onClick: () => void;
}


const Hero = () => { 
    const ref = React.useRef<HTMLCanvasElement>(null);
    const pathname = usePathname();
    const router = useRouter();
 
 
    React.useEffect(() => { 
        const canvas = ref.current as HTMLCanvasElement;
        if(!canvas) return;

        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
        if(!ctx) return; 


        // background Image 
        const backgroundImage = new Image();
        backgroundImage.src = '/hero/bg.png'; 
        backgroundImage.onload = () => {
            // background image
            ctx.globalCompositeOperation = 'destination-over';
            ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);   
            ctx.save();  
        } 
         
            // Early Childhood centre
            const earlyChildhood = new Image();
            earlyChildhood.src = '/hero/early-childhood-center-building.png';
            earlyChildhood.onload = () => {  
                ctx.globalCompositeOperation = 'source-over'; 
                ctx.drawImage(earlyChildhood, 0, 0, 400, 450);
            }  
 
            
            // Elementary School
                const elementarySchool = new Image();
                elementarySchool.src = '/hero/blue-house.png';
                elementarySchool.onload = () => { 
                    ctx.globalCompositeOperation = 'source-over'; 
                    ctx.drawImage(elementarySchool, 500, 10, 300, 350); 
                } 
                
            // sun 
            const sun = new Image();    
            sun.src = '/hero/sun.png';
            sun.onload = () => { 
                ctx.globalCompositeOperation = 'source-over';   
                ctx.drawImage(sun, 700, 0, 150, 150); 
            }

            // middle school
            const middleSchool = new Image();
            middleSchool.src = '/hero/middle-school-grades.png';
            middleSchool.onload = () => {
                ctx.globalCompositeOperation = 'source-over'; 
                ctx.drawImage(middleSchool, 850, 10, 330, 280);
            }

            // high school
            const highSchool = new Image();
            highSchool.src = '/hero/high-school.png';
            highSchool.onload = () => {
                ctx.globalCompositeOperation = 'source-over'; 
                ctx.drawImage(highSchool, 1200, 10, 450, 450);
            }

            // staff room 
            const staffRoom = new Image();
            staffRoom.src = '/hero/coconut-tree-near-the-staff-room.png';
            staffRoom.onload = () => {
                ctx.globalCompositeOperation = 'source-over'; 
                ctx.drawImage(staffRoom, 1100, 300, 200, 200);
            }

            // yak's cafe
            const yaksCafe = new Image();
            yaksCafe.src = '/hero/cafe-building.png';
            yaksCafe.onload = () => {
                ctx.globalCompositeOperation = 'source-over'; 
                ctx.drawImage(yaksCafe, 1300, 420, 300, 300);
            }

            //  football field
            const footballField = new Image();
            footballField.src = '/hero/football-field-and-3-tree.png';
            footballField.onload = () => {
                ctx.globalCompositeOperation = 'source-over'; 
                ctx.drawImage(footballField, 900, 500, 350, 300);
            }
  

            // special building
            const specialBuilding = new Image();
            specialBuilding.src = '/hero/special-projects.png';
            specialBuilding.onload = () => {
                ctx.globalCompositeOperation = 'source-over'; 
                ctx.drawImage(specialBuilding, 1130, 600, 300, 250);
            }

            // Reading Tree
            const readingTree = new Image();
            readingTree.src = '/hero/reading-tree.png';
            readingTree.onload = () => {
                ctx.globalCompositeOperation = 'source-over'; 
                ctx.drawImage(readingTree, 700, 370, 300, 300);
            }

            // resources center
            const resourcesCenter = new Image();
            resourcesCenter.src = '/hero/resource-center.png';
            resourcesCenter.onload = () => {
                ctx.globalCompositeOperation = 'source-over'; 
                ctx.drawImage(resourcesCenter, 450, 300, 250, 250);
            }

            // bridge 
            const bridge = new Image();
            bridge.src = '/hero/academy-bridge.png';
            bridge.onload = () => {
                ctx.globalCompositeOperation = 'source-over'; 
                ctx.drawImage(bridge, 90, 580, 200, 350);
            }

          
            // mouse position
            const mouse = (e: MouseEvent) => {
                const { clientX, clientY } = e;
                const { left, top, width, height } = ctx.canvas.getBoundingClientRect();

                const x = clientX - left;
                const y = clientY - top;
 

                // base on canvas size
                const _x = x * ctx.canvas.width / width;
                const _y = y * ctx.canvas.height / height;

                return { x: _x, y: _y, mouseX: x, mouseY: y };
            }

            // mouse move event
            ctx.canvas.addEventListener('mousemove', (e) => {
                const { clientX, clientY } = e;
                const { left, top, width, height } = ctx.canvas.getBoundingClientRect();

                const x = clientX - left;
                const y = clientY - top;

                // base on canvas size
                const _x = x * ctx.canvas.width / width;
                const _y = y * ctx.canvas.height / height;
                 
                ctx.save();
 
                // Early Childhood centre
                if(isMouseOver( 400, 450, 0, 0, _x, _y)){ // Early Childhood centre
                    ctx.canvas.style.cursor = 'pointer';  

                    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height); // background image
                    ctx.globalCompositeOperation = 'source-over'; 
                    ctx.drawImage(elementarySchool, 500, 10, 300, 350);  // Elementary School   
                    ctx.drawImage(sun, 700, 0, 150, 150);  // sun
                    ctx.drawImage(middleSchool, 850, 10, 330, 280); // middle school 
                    ctx.drawImage(highSchool, 1200, 10, 450, 450); // high school 
                    ctx.drawImage(staffRoom, 1100, 300, 200, 200); // staff room 
                    ctx.drawImage(yaksCafe, 1300, 420, 300, 300); // yak's cafe 

                    
                    // update the image
                    const width = 400 + 20;
                    const height = 450 + 20;
                    const x = 0 - 10;
                    const y = 0 - 10;
                    ctx.drawImage(earlyChildhood,  x, y, width, height);  
                    ctx.drawImage(footballField, 900, 500, 350, 300); // football field
                    ctx.drawImage(specialBuilding, 1130, 600, 300, 250); // special building 
                    ctx.drawImage(readingTree, 700, 370, 300, 300); // reading tree
                    ctx.drawImage(resourcesCenter, 450, 300, 250, 250); // resources center
                    ctx.drawImage(bridge, 90, 580, 200, 350); // bridge


                }else if(isMouseOver(250, 250, 450, 300, _x, _y)){ // resources center
                  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                  ctx.canvas.style.cursor = 'pointer';
                  
                  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);   
                  ctx.globalCompositeOperation = 'source-over'; 
                  ctx.drawImage(earlyChildhood, 0, 0, 400, 450); // Early Childhood centre    
                  ctx.drawImage(sun, 700, 0, 150, 150); // sun
                  ctx.drawImage(elementarySchool, 500, 10, 300, 350);  // Elementary School
                  ctx.drawImage(middleSchool, 850, 10, 330, 280); // middle school
                  ctx.drawImage(highSchool, 1200, 10, 450, 450); // high school
                  ctx.drawImage(staffRoom, 1100, 300, 200, 200); // staff room
                  ctx.drawImage(yaksCafe, 1300, 420, 300, 300); // yak's cafe
                  ctx.drawImage(footballField, 900, 500, 350, 300); // football field
                  ctx.drawImage(specialBuilding, 1130, 600, 300, 250); // special building
                  ctx.drawImage(readingTree, 700, 370, 300, 300); // reading tree
                  ctx.drawImage(bridge, 90, 580, 200, 350); // bridge
                  
                  // update the image
                  const width = 250 + 20;
                  const height = 250 + 20;
                  const x = 450 - 10;
                  const y = 300 - 10;

                  ctx.drawImage(resourcesCenter, x, y, width, height); 
                  ctx.restore();

                }else if(isMouseOver(350, 400, 500, 10, _x, _y)){ // Elementary School
                    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                    ctx.canvas.style.cursor = 'pointer';
                    
                    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);   
                    ctx.globalCompositeOperation = 'source-over';
                    ctx.drawImage(earlyChildhood, 0, 0, 400, 450);    
                    ctx.drawImage(sun, 700, 0, 150, 150); 
                    ctx.drawImage(middleSchool, 850, 10, 330, 280);
                    
                    // update the image
                    const width = 300 + 20;
                    const height = 350 + 20;
                    const x = 500 - 10;
                    const y = 10 - 10;

                    ctx.drawImage(elementarySchool, x, y, width, height); 
                    ctx.drawImage(highSchool, 1200, 10, 450, 450); // high school
                    ctx.drawImage(staffRoom, 1100, 300, 200, 200); // staff room
                    ctx.drawImage(yaksCafe, 1300, 420, 300, 300); // yak's cafe
                    ctx.drawImage(footballField, 900, 500, 350, 300); // football field
                    ctx.drawImage(specialBuilding, 1130, 600, 300, 250); // special building
                    ctx.drawImage(readingTree, 700, 370, 300, 300); // reading tree
                    ctx.drawImage(resourcesCenter, 450, 300, 250, 250); // resources center
                    ctx.drawImage(bridge, 90, 580, 200, 350); // bridge
                    ctx.restore();
                }else if(isMouseOver(330, 280, 850, 10, _x, _y)){ // middle school
                    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                    ctx.canvas.style.cursor = 'pointer';
                    
                    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);   
                    ctx.globalCompositeOperation = 'source-over'; 
                    ctx.drawImage(earlyChildhood, 0, 0, 400, 450); // Early Childhood centre    
                    ctx.drawImage(sun, 700, 0, 150, 150); // sun
                    ctx.drawImage(elementarySchool, 500, 10, 300, 350);  // Elementary School
                    ctx.drawImage(highSchool, 1200, 10, 450, 450); // high school
                    ctx.drawImage(staffRoom, 1100, 300, 200, 200); // staff room
                    
                    ctx.drawImage(yaksCafe, 1300, 420, 300, 300); // yak's cafe
                    ctx.drawImage(footballField, 900, 500, 350, 300); // football field
                    ctx.drawImage(specialBuilding, 1130, 600, 300, 250); // special building
                    ctx.drawImage(readingTree, 700, 370, 300, 300); // reading tree
                    ctx.drawImage(resourcesCenter, 450, 300, 250, 250); // resources center
                    ctx.drawImage(bridge, 90, 580, 200, 350); // bridge
                    
                    // update the image
                    const width = 330 + 20;
                    const height = 280 + 20;
                    const x = 850 - 10;
                    const y = 10 - 10;

                    ctx.drawImage(middleSchool, x, y, width, height);
                    ctx.restore();
                }else if(isMouseOver(250, 250, 1070, 280, _x, _y)){ // staff room
                  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                  ctx.canvas.style.cursor = 'pointer';
                  
                  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);   
                  ctx.globalCompositeOperation = 'source-over'; 
                  ctx.drawImage(earlyChildhood, 0, 0, 400, 450); // Early Childhood centre    
                  ctx.drawImage(sun, 700, 0, 150, 150); // sun
                  ctx.drawImage(elementarySchool, 500, 10, 300, 350);  // Elementary School
                  ctx.drawImage(middleSchool, 850, 10, 330, 280); // middle school
                  ctx.drawImage(highSchool, 1200, 10, 450, 450); // high school
                  
                  ctx.drawImage(yaksCafe, 1300, 420, 300, 300); // yak's cafe
                  ctx.drawImage(footballField, 900, 500, 350, 300); // football field
                  ctx.drawImage(specialBuilding, 1130, 600, 300, 250); // special building
                  ctx.drawImage(readingTree, 700, 370, 300, 300); // reading tree
                  ctx.drawImage(resourcesCenter, 450, 300, 250, 250); // resources center
                  ctx.drawImage(bridge, 90, 580, 200, 350); // bridge
                  
                  // update the image
                  const width = 200 + 20;
                  const height = 200 + 20;
                  const x = 1100 - 10;
                  const y = 300 - 10;

                  ctx.drawImage(staffRoom, x, y, width, height);
                  ctx.restore(); 
                }else if(isMouseOver(450, 450, 1200, 10, _x, _y)){ // high school
                    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                    ctx.canvas.style.cursor = 'pointer';
                    
                    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);   
                    ctx.globalCompositeOperation = 'source-over'; 
                    ctx.drawImage(earlyChildhood, 0, 0, 400, 450); // Early Childhood centre    
                    ctx.drawImage(sun, 700, 0, 150, 150); // sun
                    ctx.drawImage(elementarySchool, 500, 10, 300, 350);  // Elementary School
                    ctx.drawImage(middleSchool, 850, 10, 330, 280); // middle school
                    ctx.drawImage(staffRoom, 1100, 300, 200, 200); // staff room
                    
                    ctx.drawImage(yaksCafe, 1300, 420, 300, 300); // yak's cafe
                    ctx.drawImage(footballField, 900, 500, 350, 300); // football field
                    ctx.drawImage(specialBuilding, 1130, 600, 300, 250); // special building
                    ctx.drawImage(readingTree, 700, 370, 300, 300); // reading tree
                    ctx.drawImage(resourcesCenter, 450, 300, 250, 250); // resources center
                    ctx.drawImage(bridge, 90, 580, 200, 350); // bridge
                    
                    // update the image
                    const width = 450 + 20;
                    const height = 450 + 20;
                    const x = 1200 - 10;
                    const y = 10 - 10;

                    ctx.drawImage(highSchool, x, y, width, height);
                    ctx.restore();

                }else if(isMouseOver(300, 250, 1130, 600, _x, _y)){ // special building
                    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                    ctx.canvas.style.cursor = 'pointer';
                    
                    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);   
                    ctx.globalCompositeOperation = 'source-over'; 
                    ctx.drawImage(earlyChildhood, 0, 0, 400, 450); // Early Childhood centre    
                    ctx.drawImage(sun, 700, 0, 150, 150); // sun
                    ctx.drawImage(elementarySchool, 500, 10, 300, 350);  // Elementary School
                    ctx.drawImage(middleSchool, 850, 10, 330, 280); // middle school
                    ctx.drawImage(highSchool, 1200, 10, 450, 450); // high school
                    ctx.drawImage(staffRoom, 1100, 300, 200, 200); // staff room
                    ctx.drawImage(yaksCafe, 1300, 420, 300, 300); // yak's cafe
                    ctx.drawImage(footballField, 900, 500, 350, 300); // football field
                    ctx.drawImage(readingTree, 700, 370, 300, 300); // reading tree
                    ctx.drawImage(resourcesCenter, 450, 300, 250, 250); // resources center
                    ctx.drawImage(bridge, 90, 580, 200, 350); // bridge
                    
                    // update the image
                    const width = 300 + 20;
                    const height = 250 + 20;
                    const x = 1130 - 10;
                    const y = 600 - 10;

                    ctx.drawImage(specialBuilding, x, y, width, height); 
                    ctx.restore();

                }else if(isMouseOver(350, 400, 1250, 390, _x, _y)){ // yak's cafe
                  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                  ctx.canvas.style.cursor = 'pointer';
                  
                  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);   
                  ctx.globalCompositeOperation = 'source-over'; 
                  ctx.drawImage(earlyChildhood, 0, 0, 400, 450); // Early Childhood centre    
                  ctx.drawImage(sun, 700, 0, 150, 150); // sun
                  ctx.drawImage(elementarySchool, 500, 10, 300, 350);  // Elementary School
                  ctx.drawImage(middleSchool, 850, 10, 330, 280); // middle school
                  ctx.drawImage(highSchool, 1200, 10, 450, 450); // high school
                  ctx.drawImage(staffRoom, 1100, 300, 200, 200); // staff room
                  
                  // yaksCafe update the image
                  const width = 300 + 20;
                  const height = 300 + 20;
                  const x = 1300 - 10;
                  const y = 420 - 10;

                  ctx.drawImage(yaksCafe, x, y, width, height); 
                  ctx.drawImage(footballField, 900, 500, 350, 300); // football field
                  ctx.drawImage(specialBuilding, 1130, 600, 300, 250); // special building
                  ctx.drawImage(readingTree, 700, 370, 300, 300); // reading tree
                  ctx.drawImage(resourcesCenter, 450, 300, 250, 250); // resources center
                  ctx.drawImage(bridge, 90, 580, 200, 350); // bridge
                  ctx.restore();

                }else if(isMouseOver(350, 300, 900, 500, _x, _y)){ // football field
                    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                    ctx.canvas.style.cursor = 'pointer';
                    
                    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);   
                    ctx.globalCompositeOperation = 'source-over'; 
                    ctx.drawImage(earlyChildhood, 0, 0, 400, 450); // Early Childhood centre    
                    ctx.drawImage(sun, 700, 0, 150, 150); // sun
                    ctx.drawImage(elementarySchool, 500, 10, 300, 350);  // Elementary School
                    ctx.drawImage(middleSchool, 850, 10, 330, 280); // middle school
                    ctx.drawImage(highSchool, 1200, 10, 450, 450); // high school
                    ctx.drawImage(staffRoom, 1100, 300, 200, 200); // staff room
                    ctx.drawImage(yaksCafe, 1300, 420, 300, 300); // yak's cafe
                    
                    // update the image
                    const width = 350 + 20;
                    const height = 300 + 20;
                    const x = 900 - 10;
                    const y = 500 - 10;

                    ctx.drawImage(footballField, x, y, width, height); 
                    ctx.drawImage(specialBuilding, 1130, 600, 300, 250); // special building
                    ctx.drawImage(readingTree, 700, 370, 300, 300); // reading tree
                    ctx.drawImage(resourcesCenter, 450, 300, 250, 250); // resources center
                    ctx.drawImage(bridge, 90, 580, 200, 350); // bridge
                    ctx.restore();

                }else if(isMouseOver(300, 300, 700, 370, _x, _y)){ // reading tree
                    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                    ctx.canvas.style.cursor = 'pointer';
                    
                    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);   
                    ctx.globalCompositeOperation = 'source-over'; 
                    ctx.drawImage(earlyChildhood, 0, 0, 400, 450); // Early Childhood centre    
                    ctx.drawImage(sun, 700, 0, 150, 150); // sun
                    ctx.drawImage(elementarySchool, 500, 10, 300, 350);  // Elementary School
                    ctx.drawImage(middleSchool, 850, 10, 330, 280); // middle school
                    ctx.drawImage(highSchool, 1200, 10, 450, 450); // high school
                    ctx.drawImage(staffRoom, 1100, 300, 200, 200); // staff room
                    ctx.drawImage(yaksCafe, 1300, 420, 300, 300); // yak's cafe
                    ctx.drawImage(footballField, 900, 500, 350, 300); // football field
                    ctx.drawImage(specialBuilding, 1130, 600, 300, 250); // special building
                    ctx.drawImage(resourcesCenter, 450, 300, 250, 250); // resources center
                    ctx.drawImage(bridge, 90, 580, 200, 350); // bridge
                    
                    // update the image
                    const width = 300 + 20;
                    const height = 300 + 20;
                    const x = 700 - 10;
                    const y = 370 - 10;

                    ctx.drawImage(readingTree, x, y, width, height); 
                    ctx.restore();

                }else{ // default
                    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                    ctx.canvas.style.cursor = 'default';
                    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);   
                    ctx.globalCompositeOperation = 'source-over';
                    
                    ctx.drawImage(earlyChildhood, 0, 0, 400, 450); // Early Childhood centre
                    ctx.drawImage(elementarySchool, 500, 10, 300, 350);  // Elementary School
                    ctx.drawImage(sun, 700, 0, 150, 150); // sun
                    ctx.drawImage(middleSchool, 850, 10, 330, 280); // middle school
                    ctx.drawImage(highSchool, 1200, 10, 450, 450); // high school
                    ctx.drawImage(staffRoom, 1100, 300, 200, 200); // staff room
                    ctx.drawImage(yaksCafe, 1300, 420, 300, 300); // yak's cafe
                    ctx.drawImage(footballField, 900, 500, 350, 300); // football field
                    ctx.drawImage(specialBuilding, 1130, 600, 300, 250); // special building
                    ctx.drawImage(readingTree, 700, 370, 300, 300); // reading tree
                    ctx.drawImage(resourcesCenter, 450, 300, 250, 250); // resources center
                    ctx.drawImage(bridge, 90, 580, 200, 350); // bridge

                }
            })


            // mouse click event
            ctx.canvas.addEventListener('click', (e) => {
              const { x, y, mouseX, mouseY } = mouse(e);

              removeDropdown();
              removeTooltip();
              // Early Childhood centre
              if(isMouseOver( 400, 450, 0, 0, x, y)){ // Early Childhood centre
                router.push(`${pathname}?school-tab=1#school-section`)
              }else if(isMouseOver(250, 250, 450, 300, x, y)){ // resources center
                createTooltip(mouseX, mouseY, "Please be patient. Real magic takes time. Follow developments at Yak’s Cafe.");
              }else if(isMouseOver(350, 400, 500, 10, x, y)){ // Elementary School 
                router.push(`${pathname}?school-tab=2#school-section`)
              }else if(isMouseOver(330, 280, 850, 10, x, y)){ // middle school 
                router.push(`${pathname}?school-tab=3#school-section`)
              }else if(isMouseOver(250, 250, 1070, 280, x, y)){ // staff room 

                // create dropdown
                createDropdown(
                  e,
                  mouseX, 
                  mouseY,
                  [
                    {
                      id: '1',
                      label: 'The Leadership Team',
                      onClick: () => {
                        router.push(`${pathname}?modal=staff`)
                      }
                    },
                    {
                      id: '2',
                      label: 'Our Teachers',
                      onClick: () => {
                        router.push(`${pathname}?modal=teachers&shift=early-childhood-ages-3-5`);
                      }
                    }
                  ]
                );
              }else if(isMouseOver(450, 450, 1200, 10, x, y)){ // high school
                router.push(`${pathname}?school-tab=4#school-section`)
              }else if(isMouseOver(350, 400, 1250, 390, x, y)){ // yak's cafe 
                router.push(`${pathname}#join-yaks-cafe`)
              }else if(isMouseOver(300, 250, 1130, 600, x, y)){ // special building 
                router.push(`${pathname}#special-programs`)
              }else if(isMouseOver(350, 300, 900, 500, x, y)){ // football field
                // console.log('Football Field')
              }else if(isMouseOver(300, 300, 700, 370, x, y)){ // reading tree 
                // router.push(`${pathname}?school-tab=5#school-section`)
                createTooltip(mouseX, mouseY, "Please be patient. Real magic takes time. Follow developments at Yak’s Cafe.");
              }else{ // default
                removeDropdown();
              }
            });

            // create tooltip
            const createTooltip = (x: number, y: number, text: string) => {
              // create tooltip
              const tooltip = document.createElement('div');
              tooltip.setAttribute('id', 'canvas-tooltip'); 
              tooltip.style.position = 'absolute';
              tooltip.style.top = `${y}px`;
              tooltip.style.left = `${x}px`;  
              tooltip.style.zIndex = '9999';
              tooltip.addEventListener('click', e => {
                e.stopPropagation();
              })


              // create header
              const toolTipHeader = document.createElement('div');
              toolTipHeader.classList.add('canvas-tooltip-header');

              // close button
              const closeButton = document.createElement('button');
              closeButton.classList.add('canvas-tooltip-close-button');
              closeButton.innerHTML = `&times;`;
              // close button click event
              closeButton.onclick = (e) => {
                e.stopPropagation();
                removeTooltip();
              }

              // append to header
              toolTipHeader.append(closeButton); 
              tooltip.append(toolTipHeader);

              // body
              const toolTipBody = document.createElement('div');
              toolTipBody.classList.add('canvas-tooltip-body'); 
              toolTipBody.innerHTML = text;
              toolTipBody.addEventListener('click', e => {
                e.stopPropagation();  
              })

              // append to tooltip
              tooltip.append(toolTipBody); 


              // append to body
              const body = document.querySelector('#hero-canvas-container');
              body?.appendChild(tooltip);

              // // set timeout to remove tooltip
              // setTimeout(() => {
              //   removeTooltip();
              // }, 2000)
            }

            // Remove tooltip
            const removeTooltip = () => {
              const tooltip = document.querySelector('#canvas-tooltip');
              if(!tooltip) return;
              tooltip?.remove();
            } 

            // Show Dropdown
            const createDropdown = (e:MouseEvent, x: number, y: number, options: DropdownOption[]) => { 
                // create dropdown 
                const dropdown = document.createElement('div');
                dropdown.setAttribute('id', 'canvas-dropdown');
                dropdown.style.position = 'absolute';
                dropdown.style.top = `${y}px`;
                dropdown.style.left = `${x}px`;  
                dropdown.style.zIndex = '9999';
                dropdown.addEventListener('click', e => {
                  e.stopPropagation();  
                })

                


                // create options
                options.forEach(option => {
                  const click = () => {
                    removeDropdown();
                    option.onClick();
                  }
                  // create option element
                  const optionElement = document.createElement('div'); 
                  optionElement.classList.add('canvas-dropdown-option', option.className as string);
                  optionElement.innerHTML = option.label;
                  optionElement.onclick = click;
                  dropdown.appendChild(optionElement);
                })
 

                // append to body
                const body = document.querySelector('#hero-canvas-container');
                body?.appendChild(dropdown);
            }
 
            // Remove Dropdown
            const removeDropdown = () => {
                const dropdown = document.querySelector('#canvas-dropdown');
                if(!dropdown) return;
                dropdown?.remove();
            }
   
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [ref]) 

 
    // is mouse over
    const isMouseOver = ( 
        width: number,
        height: number,
        x: number, 
        y: number, 
        mX: number, 
        mY: number
    ) => {  
        return ( 
            mX > x && mX < x + width &&
            mY > y && mY < y + height
        )
    }

    return(
        <Box id="hero-canvas-container" position="relative">
          <canvas 
              ref={ref} 
              width={1620} 
              height={900} 
              style={{ 
                  width: '100%',
                  height: '100%',
                  aspectRatio: '16/8',
              }}
          />
        </Box>
    )
}

export default Hero;