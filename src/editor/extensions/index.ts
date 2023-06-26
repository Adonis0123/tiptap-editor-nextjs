import Placeholder from '@tiptap/extension-placeholder';
import StarterKit from '@tiptap/starter-kit';
import DragHandle from './DragHandle';
import TiptapLink from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import Highlight from '@tiptap/extension-highlight';
import Typography from '@tiptap/extension-typography';
import TextAlign from '@tiptap/extension-text-align';
import TiptapUnderline from '@tiptap/extension-underline';
import TextStyle from '@tiptap/extension-text-style';
import ListItem from '@tiptap/extension-list-item';
import { Color } from '@tiptap/extension-color';
import SlashCommand from './SlashCommand';
import TaskItem from '@tiptap/extension-task-item';
import TaskList from '@tiptap/extension-task-list';
import classNames from 'classnames';

export const TiptapExtensions = [
  DragHandle,
  StarterKit.configure({
    bulletList: {
      HTMLAttributes: {
        class: classNames('list-disc list-inside '),
      },
    },
    orderedList: {
      HTMLAttributes: {
        class: classNames('list-decimal list-inside'),
      },
    },
    listItem: {
      HTMLAttributes: {
        class: classNames(`[&_p]:inline-block marker:text-[#677788]`),
      },
    },
    blockquote: {
      HTMLAttributes: {
        class: classNames('border-l-4 border'),
      },
    },
    codeBlock: {
      HTMLAttributes: {
        class: classNames(
          'rounded-sm bg-stone-100 p-5  font-medium font-extrabold'
        ),
      },
    },
    code: {
      HTMLAttributes: {
        class: classNames(
          'rounded-md bg-stone-200 px-1.5 py-1  font-medium text-[#375375]'
        ),
        spellcheck: 'false',
      },
    },
    horizontalRule: false,
    dropcursor: {
      color: '#DBEAFE',
      width: 4,
    },
    gapcursor: false,
  }),
  TiptapLink.configure({
    HTMLAttributes: {
      class: classNames(
        'underline underline-offset-[3px] text-[#3A7EFF]  transition-colors cursor-pointer'
      ),
    },
  }),
  Highlight,
  Typography,
  Image.configure({
    inline: true,
  }),
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextAlign.configure({
    types: ['heading', 'paragraph'],
  }),
  TextStyle,
  Placeholder.configure({
    placeholder: ({ node }) => {
      if (node.type.name === 'heading') {
        return `Heading ${node.attrs.level}`;
      }
      return "Press '/' for commands";
    },
    includeChildren: true,
  }),
  SlashCommand,
  TaskList.configure({
    HTMLAttributes: {
      class: 'not-prose pl-2',
    },
  }),
  TaskItem.configure({
    HTMLAttributes: {
      class: 'flex items-start mb-4',
    },
  }),
  TiptapUnderline,
];
