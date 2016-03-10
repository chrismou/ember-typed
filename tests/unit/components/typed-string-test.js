/* jshint expr:true */
import { expect } from 'chai';
import { describe } from 'mocha';
import {
  describeComponent,
  it
} from 'ember-mocha';

describeComponent(
  'typed-string',
  'TypedStringComponent',
  {
    // Specify the other units that are required for this test
    // needs: ['component:foo', 'helper:bar'],
    unit: true
  },
  function() {
    it('renders', function() {
      // creates the component instance
      let component = this.subject();
      // renders the component on the page
      this.render();
      expect(component).to.be.ok;
      expect(this.$()).to.have.length(1);
    });

    describe('checks passed property', function() {

      it('strings', function() {
        let component = this.subject();
        let typedStrings = ['welcome to ember!', 'if you like it, start the addon on github!'];
        component.set('strings', typedStrings);
        this.render();
        expect(component).to.have.ownProperty('strings');
        expect(component.get('strings')).to.include.all.members(['welcome to ember!', 'if you like it, start the addon on github!']);
      });

      it('typeSpeed', function() {
        let component = this.subject();
        component.set('typeSpeed', 100);
        this.render();
        expect(component).to.have.ownProperty('typeSpeed');
        expect(component.get('typeSpeed')).to.be.a('number');
        expect(component.get('typeSpeed')).to.equal(100);
      });

      it('startDelay', function() {
        let component = this.subject();
        component.set('startDelay', 100);
        this.render();
        expect(component).to.have.ownProperty('startDelay');
        expect(component.get('startDelay')).to.be.a('number');
        expect(component.get('startDelay')).to.equal(100);
      });

      it('backSpeed', function() {
        let component = this.subject();
        component.set('backSpeed', 100);
        this.render();
        expect(component).to.have.ownProperty('backSpeed');
        expect(component.get('backSpeed')).to.be.a('number');
        expect(component.get('backSpeed')).to.equal(100);
      });

      it('backDelay', function() {
        let component = this.subject();
        component.set('backDelay', 100);
        this.render();
        expect(component).to.have.ownProperty('backDelay');
        expect(component.get('backDelay')).to.be.a('number');
        expect(component.get('backDelay')).to.equal(100);
      });

      it('loop', function() {
        let component = this.subject();
        component.set('loop', true);
        this.render();
        expect(component).to.have.ownProperty('loop');
        expect(component.get('loop')).to.be.a('boolean');
        expect(component.get('loop')).to.be.true;
      });

      it('loopCount', function() {
        let component = this.subject();
        component.set('loopCount', true);
        this.render();
        expect(component).to.have.ownProperty('loopCount');
        expect(component.get('loopCount')).to.be.a('boolean');
        expect(component.get('loopCount')).to.be.true;
      });

      it('showCursor', function() {
        let component = this.subject();
        component.set('showCursor', false);
        this.render();
        expect(component).to.have.ownProperty('showCursor');
        expect(component.get('showCursor')).to.be.a('boolean');
        expect(component.get('showCursor')).to.be.false;
      });

    });
  }
);
