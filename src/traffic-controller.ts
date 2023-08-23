
function setDefaultStyle(element: HTMLElement): void {
    element.style.padding = '1px';
    element.style.margin = '0px';
    element.style.fontSize = '9px';
    element.style.border = '2px solid grey';
    element.style.boxSizing = 'border-box';
}

function createContainer(): HTMLDivElement {
    const container = document.createElement('div');
    setDefaultStyle(container);
    container.style.position = 'absolute';
    container.style.top = '100px';
    container.style.left = '10px';
    container.style.backgroundColor = 'white';
    container.style.color = 'black';

    container.addEventListener('click', () => {
        console.log('TrafficController onClick');
    });
    return container;
}

function createSubContainer(): HTMLDivElement {
    const container = document.createElement('div');
    setDefaultStyle(container);
    container.style.backgroundColor = 'white';
    container.style.color = 'black';
    container.addEventListener('click', () => {
        console.log('TrafficController onClick');
    });
    return container;
}

function createButton(text: string): HTMLButtonElement {
    const button = document.createElement('button');
    setDefaultStyle(button);
    button.style.display = 'block';
    button.style.height = '14px';
    button.style.color = 'white';
    button.style.backgroundColor = "black"
    
    button.innerHTML = text;

    button.addEventListener('click', () => {
        console.log('TrafficController button onClick');
    });
    return button;
}   

function createFlexContainer(): HTMLDivElement {
    const container = document.createElement('div');
    setDefaultStyle(container);
    container.style.display = 'flex';
    container.style.backgroundColor = 'white';
    container.style.color = 'black';
    return container;
}

function createSelect(): HTMLSelectElement {
    const select = document.createElement('select');
    setDefaultStyle(select);
    select.style.display = 'inline-block';
    select.style.height = '13px';
    select.style.color = 'black';
    return select;
}

export class TrafficController {

    constructor() {
        const container = createContainer();
        container.appendChild(this.createOneTrafficController());
        container.appendChild(this.createOneTrafficController());

        const newTrafficButton = createButton(" + New Traffic ");
        // newTrafficButton.style.width = "calc(100% - 2px)";
        newTrafficButton.style.width = "100%";
        container.appendChild(newTrafficButton);
        document.body.appendChild(container);
    }

    private createOneTrafficController(): HTMLDivElement {
        const container = createSubContainer();
        const buttonContainer = this.createUDButtonDiv();
        
        container.appendChild(buttonContainer);
        return container;
    }

    private createUDButtonDiv(): HTMLDivElement {
        const buttonContainer = createFlexContainer();
        
        const updateButton = createButton('Update');
        const deleteButton = createButton('Delete');

        buttonContainer.appendChild(updateButton);
        buttonContainer.appendChild(deleteButton);

        return buttonContainer;
    }

}