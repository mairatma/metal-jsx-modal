'use strict';

import JSXComponent from 'metal-jsx';

class Modal extends JSXComponent  {
	hide() {
		this.visible = false;
	}

	render() {
		var buttons = this.footerButtons.map((button) => {
			return <button type="button" class="btn btn-primary">{button.label}</button>
		});

		return <div class="modal">
			<div class="modal-dialog">
				<div class="modal-content">
					<header class="modal-header">
						<button type="button" class="close" data-onclick={this.hide.bind(this)} aria-label="Close">
							<span aria-hidden="true">×</span>
						</button>
						<h4 class="modal-title">{this.header}</h4>
					</header>
					<section class="modal-body">{this.body}</section>
					<footer class="modal-footer">{buttons}</footer>
				</div>
			</div>
		</div>;
	}
}

Modal.STATE = {
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

export default Modal;
