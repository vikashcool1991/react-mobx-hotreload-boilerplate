import {observable, computed} from 'mobx';
import {map, toJS} from 'mobx';

class Todos {
  @observable todos = map({});

}

const todos = new Todos()
export {todos};