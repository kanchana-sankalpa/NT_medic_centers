import { Actions, ActionConst } from 'react-native-router-flux';

export function select(e) {
  Actions.jump(e.navigation.state.key, { type: 'reset' });
}

export function backHome() {
  Actions.pop();

}
export function backPop() {
  Actions.pop();
}
export function backPopTo(key,props) {
  Actions.popTo(key,props);
}

export function refreshScreen(RequiredScene, props) {
  if (Actions.currentScene !== RequiredScene) {
    return;
  } else {
 
    Actions.refresh(props);
  }
}


export function getCurrentScene() {
  return Actions.currentScene;
}

export function actions(destinationScene, props) {
  
  if (Actions.currentScene === destinationScene) {
    return;
  }
  return Actions[destinationScene](props);

}
export function push(destinationScene, props) {
  
  if (Actions.currentScene === destinationScene) {
    return;
  }
  return Actions.push(destinationScene, props);
}

export function jump(destinationScene, props) {
  Actions.jump(destinationScene, props);
}

export function matchScreen(destinationScene) {
  if (Actions.currentScene === destinationScene) {
    return true;
  } else {
    return false;
  }
}
