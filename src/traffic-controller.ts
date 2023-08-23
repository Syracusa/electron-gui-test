
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
    return container;
}

function createSubContainer(): HTMLDivElement {
    const container = document.createElement('div');
    setDefaultStyle(container);
    container.style.backgroundColor = 'white';
    container.style.color = 'black';
    return container;
}

function createButton(text: string): HTMLButtonElement {
    const button = document.createElement('button');
    setDefaultStyle(button);
    button.style.display = 'block';
    button.style.height = '16px';
    button.style.color = 'white';
    button.style.backgroundColor = "black"
    button.innerHTML = text;
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

function createSelect(options: HTMLOptionElement[]): HTMLSelectElement {
    const select = document.createElement('select');
    setDefaultStyle(select);
    select.style.display = 'inline-block';
    select.style.height = '20px';
    select.style.color = 'black';

    options.forEach(option => {
        select.appendChild(option);
    });
    return select;
}

function createLabel(text: string): HTMLLabelElement {
    const label = document.createElement('label');
    setDefaultStyle(label);
    label.style.display = 'inline-block';
    label.style.height = '20px';
    label.style.color = 'black';
    label.innerHTML = text;
    return label;
}

export class TrafficController {

    constructor() {
        const container = createContainer();
        container.appendChild(this.createOneTrafficController());
        container.appendChild(this.createOneTrafficController());

        const newTrafficButton = createButton(" + New Traffic ");
        newTrafficButton.style.width = "100%";
        container.appendChild(newTrafficButton);
        document.body.appendChild(container);
    }

    private createOneTrafficController(): HTMLDivElement {
        const container = createSubContainer();
        container.style.border = '2px solid GhostWhite';
        container.style.borderBottom = 'none';

        const senderReceiverContainer = this.createSenderReceiverSelectContainer();
        container.appendChild(senderReceiverContainer);

        const trafficTraitContainer = this.createTrafficTraitSelectContainer();
        container.appendChild(trafficTraitContainer);

        const buttonContainer = this.createUDButtonDiv();
        container.appendChild(buttonContainer);
        return container;
    }

    private createTrafficTraitSelectContainer(): HTMLDivElement {
        const container = createFlexContainer();
        container.style.width = '100%';

        const packetSizeOptions: HTMLOptionElement[] = [];
        for (let i = 100; i < 1600; i += 100) {
            const option = document.createElement('option');
            option.value = i.toString();
            option.innerHTML = i.toString();
            packetSizeOptions.push(option);
        }
        const packetSizeSelector = this.createSelector('Packet Size', packetSizeOptions, 9);
        packetSizeSelector.style.width = '50%';
        container.appendChild(packetSizeSelector);

        const intervalOptions: HTMLOptionElement[] = [];
        for (let i = 1; i < 5; i++) {
            const option = document.createElement('option');
            option.value = i.toString();
            option.innerHTML = i.toString();
            intervalOptions.push(option);
        }
        for (let i = 5; i < 100; i += 5) {
            const option = document.createElement('option');
            option.value = i.toString();
            option.innerHTML = i.toString();
            intervalOptions.push(option);
        }
        for (let i = 100; i <= 1000; i += 100) {
            const option = document.createElement('option');
            option.value = i.toString();
            option.innerHTML = i.toString();
            intervalOptions.push(option);
        }

        const intervalSelector = this.createSelector('Interval(ms)', intervalOptions, 23);
        intervalSelector.style.width = '50%';
        container.appendChild(intervalSelector);

        return container;
    }

    private createSenderReceiverSelectContainer(): HTMLDivElement {
        const container = createFlexContainer();
        container.style.width = '100%';

        const senderOptions: HTMLOptionElement[] = [];
        for (let i = 0; i < 10; i++) {
            const option = document.createElement('option');
            option.value = i.toString();
            option.innerHTML = i.toString();
            senderOptions.push(option);
        }
        const senderSelector = this.createSelector('Sender', senderOptions);
        senderSelector.style.width = '50%';
        container.appendChild(senderSelector);

        const receiverOptions: HTMLOptionElement[] = [];
        for (let i = 0; i < 10; i++) {
            const option = document.createElement('option');
            option.value = i.toString();
            option.innerHTML = i.toString();
            receiverOptions.push(option);
        }
        const receiverSelector = this.createSelector('Receiver', receiverOptions, 1);
        receiverSelector.style.width = '50%';
        container.appendChild(receiverSelector);

        return container;
    }

    private createUDButtonDiv(): HTMLDivElement {
        const buttonContainer = createFlexContainer();

        const startButton = createButton('Start');
        startButton.style.width = '33.4%';
        startButton.onclick = () => {
            if (startButton.innerHTML === 'Start') {
                startButton.innerHTML = 'Stop';
                startButton.style.backgroundColor = 'red';
            } else {
                startButton.innerHTML = 'Start';
                startButton.style.backgroundColor = 'black';
            }
        }

        const updateButton = createButton('Update');
        updateButton.style.width = '33.3%';
        const deleteButton = createButton('Delete');
        deleteButton.style.width = '33.3%';

        buttonContainer.appendChild(startButton);
        buttonContainer.appendChild(updateButton);
        buttonContainer.appendChild(deleteButton);

        return buttonContainer;
    }

    private createSelector(text: string, options: HTMLOptionElement[], defaultIdx = 0): HTMLDivElement {
        const container = createFlexContainer();
        container.style.width = '100%';
        const label = createLabel(text);
        label.style.width = '50px';
        label.style.borderRight = 'none';

        container.appendChild(label);
        const select = createSelect(options);
        select.style.width = '50px';
        select.style.borderLeft = 'none';
        select.style.backgroundColor = 'grey';
        select.selectedIndex = defaultIdx;

        container.appendChild(select);
        return container;
    }

}