import { EditorState } from '@tiptap/pm/state';
import { Node as PMNode } from '@tiptap/pm/model';

export function getNodeAtPos(state: EditorState, pos: number): PMNode | null {
  const $head = state.doc.resolve(pos);
  let node: PMNode | null = null;

  for (let d = $head.depth; d > 0; d--) {
    node = $head.node(d);
  }

  return node;
}
