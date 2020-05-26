import React from 'react';
import '../tailwind.generated.css';

class Popup extends React.Component {
    render() {
        return (
            <div class="fixed m-auto w-full bg-gray-700">
                <div class="absolute m-auto bg-gray-500">
                    <h1>peepe</h1>

                    <button onClick={this.props.closePopup}>close me</button>
                </div>
            </div>
        );
    }
}

export default Popup;