import Component from '@ember/component';

export default Component.extend({
  tagName: "wired-input",
  // value: 'componete value',
  attributeBindings: ['placeholder', 'disabled', 'type', 'value', 'blur:onblur'],


  didRender(){
    // atualiza o componente e o ember, apenas em questão de evento
    this.element.oninput = (evento) => {
      this.eventoInput(evento);
    };
    this.element.onclick = (evento) => {
      this.click(evento);
    };
    this.element.pendingValue = this.get('value');
  },

  eventoInput(evento){
    this.set('value',evento.target.value);
  },

  click(){}

});
