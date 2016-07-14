'use strict';

import JSXComponent from 'metal-jsx';

class Modal extends JSXComponent  {
	hide() {
		this.state.show = false;
	}

	render() {
		var buttons = this.props.footerButtons.map(button => {
			return <button type="button" class="btn btn-primary">{button.label}</button>
		});

		var className = 'modal' + (this.state.show ? ' show' : '');
		return <div class={className}>
			<div class="modal-dialog">
				<div class="modal-content">
					<header class="modal-header">
						<button
							type="button"
							class="close"
							data-onclick={this.hide.bind(this)}
							aria-label="Close">
							<span aria-hidden="true">×</span>
						</button>
						<h4 class="modal-title">{this.props.header}</h4>
					</header>
					<section class="modal-body">{this.props.body}</section>
					<footer class="modal-footer">{buttons}</footer>
				</div>
			</div>
		</div>;
	}
}

Modal.PROPS = {
	body: {
		value: 'Some Body'
	},
	footerButtons: {
		value: [
			{
				label: 'OK'
			}
		]
	},
	header: {
		value: 'Some Header'
	}
};

Modal.STATE = {
	show: {
		value: true
	}
};

export default Modal;
