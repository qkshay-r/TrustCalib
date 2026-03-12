export interface Stimulus {
  id: string;
  language: string;
  code: string;
  explanation: string;
  isCorrect: boolean;
  socialProof: number; // Percentage of users who found it helpful
  aiConfidence: "High" | "Medium" | "Low";
  isPractice?: boolean;
}

export const STIMULI: Stimulus[] = [
  {
    id: "practice_1",
    language: "python",
    code: "print('Hello World')",
    explanation: "This is a basic print statement in Python that outputs 'Hello World' to the console.",
    isCorrect: true,
    socialProof: 99,
    aiConfidence: "High",
    isPractice: true
  },
  {
    id: "practice_2",
    language: "javascript",
    code: "let x = 10;\nx = 'ten';\nconsole.log(x);",
    explanation: "This code will throw an error because you cannot reassign a variable to a different type in JavaScript.",
    isCorrect: false,
    socialProof: 5,
    aiConfidence: "Low",
    isPractice: true
  },
  {
    id: "trial_1",
    language: "python",
    code: "def find_max(arr):\n    return max(arr) if arr else None",
    explanation: "This function returns the maximum value in a list. If the list is empty, it returns None to avoid a ValueError.",
    isCorrect: true,
    socialProof: 94,
    aiConfidence: "High"
  },
  {
    id: "trial_2",
    language: "javascript",
    code: "const sum = (a, b) => a + b;\nconsole.log(sum(5, '5'));",
    explanation: "This code will output 10 because JavaScript automatically converts the string '5' to a number during addition.",
    isCorrect: false,
    socialProof: 12,
    aiConfidence: "Low"
  },
  {
    id: "trial_3",
    language: "python",
    code: "items = [1, 2, 3]\nprint(items[3])",
    explanation: "This code will raise an IndexError because Python lists are zero-indexed, and index 3 is out of bounds for a list of length 3.",
    isCorrect: true,
    socialProof: 88,
    aiConfidence: "High"
  },
  {
    id: "trial_4",
    language: "javascript",
    code: "let x = [1, 2, 3];\nlet y = x;\ny.push(4);\nconsole.log(x.length);",
    explanation: "The output will be 3 because 'y' is a deep copy of 'x', so modifying 'y' does not affect 'x'.",
    isCorrect: false,
    socialProof: 45,
    aiConfidence: "Medium"
  },
  {
    id: "trial_5",
    language: "python",
    code: "def greet(name='Guest'):\n    print(f'Hello, {name}')\n\ngreet()",
    explanation: "This uses a default parameter. Calling greet() without arguments will use 'Guest' as the default value.",
    isCorrect: true,
    socialProof: 96,
    aiConfidence: "High"
  },
  {
    id: "trial_6",
    language: "javascript",
    code: "console.log(typeof null);",
    explanation: "This outputs 'null' because null is a unique primitive type in JavaScript.",
    isCorrect: false,
    socialProof: 38,
    aiConfidence: "Low"
  },
  {
    id: "trial_7",
    language: "python",
    code: "x = 10\ndef func():\n    print(x)\nfunc()",
    explanation: "This will raise an UnboundLocalError because 'x' is defined outside the function scope and cannot be accessed inside.",
    isCorrect: false,
    socialProof: 15,
    aiConfidence: "Low"
  },
  {
    id: "trial_8",
    language: "javascript",
    code: "const obj = { a: 1 };\nObject.freeze(obj);\nobj.a = 2;\nconsole.log(obj.a);",
    explanation: "The output will be 1. Object.freeze prevents existing properties from being changed.",
    isCorrect: true,
    socialProof: 82,
    aiConfidence: "High"
  },
  {
    id: "trial_9",
    language: "python",
    code: "my_dict = {'a': 1}\nprint(my_dict.get('b', 0))",
    explanation: "This will output 0. The .get() method returns the second argument if the key is not found in the dictionary.",
    isCorrect: true,
    socialProof: 91,
    aiConfidence: "High"
  },
  {
    id: "trial_10",
    language: "javascript",
    code: "for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 100);\n}",
    explanation: "This will output 0, 1, 2 because the loop creates a new scope for 'i' in each iteration.",
    isCorrect: false,
    socialProof: 22,
    aiConfidence: "Medium"
  },
  {
    id: "trial_11",
    language: "python",
    code: "a = [1, 2]\nb = [1, 2]\nprint(a is b)",
    explanation: "This outputs True because Python caches small lists with the same content to save memory.",
    isCorrect: false,
    socialProof: 18,
    aiConfidence: "Low"
  },
  {
    id: "trial_12",
    language: "javascript",
    code: "const arr = [1, 2, 3];\nconst [first, ...rest] = arr;\nconsole.log(rest);",
    explanation: "This uses array destructuring with the rest operator. 'rest' will be the array [2, 3].",
    isCorrect: true,
    socialProof: 89,
    aiConfidence: "High"
  },
  {
    id: "trial_13",
    language: "python",
    code: "try:\n    x = 1/0\nexcept Exception as e:\n    print('Error')\nfinally:\n    print('Done')",
    explanation: "The 'finally' block will execute regardless of whether an exception was raised or caught.",
    isCorrect: true,
    socialProof: 95,
    aiConfidence: "High"
  },
  {
    id: "trial_14",
    language: "javascript",
    code: "function foo() {\n  return\n  {\n    bar: 'baz'\n  };\n}\nconsole.log(foo());",
    explanation: "This will output { bar: 'baz' } because JavaScript ignores the newline after the return statement.",
    isCorrect: false,
    socialProof: 25,
    aiConfidence: "Low"
  }
];
