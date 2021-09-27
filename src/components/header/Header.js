import {AbstractComponent} from '@core/AbstractComponent';

export class Header extends AbstractComponent {
  static className = 'header';

  constructor($root, options) {
    super($root, {
      name: 'Header',
      ...options
    });
  }

  getTemplate() {
    return `
      <div class="header__coords">
          <div class="header__coords-titles">
            <div class="header__coords-title">X</div>
            <div class="header__coords-title">Y</div>
          </div>
          
          <div class="header__inputs">
            <div class="header__inputs-elements">
              <input type="text" class="header__inputs-input">
              <input type="text" class="header__inputs-input">
              <div class="header__inputs-button">Delete</div>
            </div>
          </div>
        
          <div class="header__coords-button">Add</div>
      </div>
      
      <div class="header__coords">
        <div class="header__coords-titles">
          <div class="header__coords-title">X</div>
          <div class="header__coords-title">Y</div>
        </div>
        
        <div class="header__inputs">
          <div class="header__inputs-elements">
            <input type="text" class="header__inputs-input">
            <input type="text" class="header__inputs-input">
            <div class="header__inputs-button">Delete</div>
          </div>
        </div>
        
        <div class="header__coords-button">Add</div>
      </div>
      
      <div class="header__calculate">
        <div class="header__calculate-titles">
          <div class="header__calculate-title">X</div>
          <div class="header__calculate-title">Y</div>
        </div>
        
        <div class="header__inputs">
          <div class="header__inputs-elements">
            <input type="text" class="header__inputs-input">
            <input type="text" class="header__inputs-input">
          </div>
        </div>
        
        <div class="header__coords-button">Calculate</div>
      </div>
    `;
  }
}
