/* ============================================================
   DS Master - Quiz Bank (MCQ Questions)
   20-30 questions per lecture, bilingual
   ============================================================ */

const QUIZZES = {
  // ──────────────────────────────────────────────────────────────
  // LECTURE 1: Introduction to DS
  // ──────────────────────────────────────────────────────────────
  1: [
    {
      question: { ar: 'ما هي المعادلة الذهبية للبرمجة؟', en: 'What is the golden equation of programming?' },
      options: [
        'Program = Data + Code',
        'Program = Algorithm + Data Structure',
        'Program = Input + Output',
        'Program = Variables + Functions'
      ],
      correct: 1,
      explanation: { ar: 'المعادلة الذهبية هي: Program = Algorithm + Data Structure', en: 'The golden equation is: Program = Algorithm + Data Structure' }
    },
    {
      question: { ar: 'ما تعريف الـ Data Structure؟', en: 'What is the definition of Data Structure?' },
      options: [
        { ar: 'لغة برمجة', en: 'A programming language' },
        { ar: 'طريقة لتنظيم البيانات في الذاكرة لاستخدامها بكفاءة', en: 'A way to organize data in memory for efficient use' },
        { ar: 'نوع من قواعد البيانات', en: 'A type of database' },
        { ar: 'نظام تشغيل', en: 'An operating system' }
      ],
      correct: 1,
      explanation: { ar: 'الـ DS هي organization of data in memory بكفاءة', en: 'DS is the organization of data in memory for efficient use' }
    },
    {
      question: { ar: 'البرنامج اللي بيستخدم الـ Data Structure الجاهزة يسمى؟', en: 'The program that uses a ready-made data structure is called?' },
      options: ['Implementation', 'Client Program', 'Algorithm', 'Compiler'],
      correct: 1,
      explanation: { ar: 'الـ Client Program هو اللي بيستخدم الـ DS الجاهزة', en: 'The Client Program uses the ready-made DS' }
    },
    {
      question: { ar: 'البرنامج اللي بيبني الـ Data Structure نفسها يسمى؟', en: 'The program that builds the Data Structure itself is called?' },
      options: ['Client Program', 'Implementation', 'Operating System', 'Database'],
      correct: 1,
      explanation: { ar: 'الـ Implementation هو اللي بيبني الـ DS', en: 'The Implementation program builds the DS' }
    },
    {
      question: { ar: 'أي من دول هيكل بيانات خطي (Linear)؟', en: 'Which of these is a Linear Data Structure?' },
      options: ['Tree', 'Graph', 'Stack', 'Hash Table'],
      correct: 2,
      explanation: { ar: 'الـ Stack هيكل خطي - LIFO', en: 'Stack is a linear DS - LIFO' }
    },
    {
      question: { ar: 'الـ Trees و Graphs تنتمي لأي نوع؟', en: 'Trees and Graphs belong to which type?' },
      options: ['Linear', 'Non-Linear', 'Primitive', 'Static'],
      correct: 1,
      explanation: { ar: 'الأشجار والرسوم البيانية هياكل غير خطية (Non-Linear)', en: 'Trees and Graphs are Non-Linear data structures' }
    },
    {
      question: { ar: 'أي من دول Primitive Data Structure؟', en: 'Which is a Primitive Data Structure?' },
      options: ['Array', 'Linked List', 'Integer', 'Stack'],
      correct: 2,
      explanation: { ar: 'Integer هو Primitive DS - أنواع البيانات الأساسية', en: 'Integer is a Primitive DS - basic data type' }
    },
    {
      question: { ar: 'الـ Stack بيتبع مبدأ؟', en: 'Stack follows which principle?' },
      options: ['FIFO', 'LIFO', 'Random Access', 'Priority'],
      correct: 1,
      explanation: { ar: 'Stack = LIFO (Last In First Out)', en: 'Stack = LIFO (Last In First Out)' }
    },
    {
      question: { ar: 'الـ Queue بيتبع مبدأ؟', en: 'Queue follows which principle?' },
      options: ['LIFO', 'FIFO', 'Sequential Access', 'Random Access'],
      correct: 1,
      explanation: { ar: 'Queue = FIFO (First In First Out)', en: 'Queue = FIFO (First In First Out)' }
    },
    {
      question: { ar: 'الفرق الأساسي بين الـ DS والـ Database؟', en: 'The main difference between DS and Database?' },
      options: [
        { ar: 'DS أسرع من Database', en: 'DS is faster than Database' },
        { ar: 'DS في Main Memory (مؤقتة) والـ Database في Secondary Storage (دائمة)', en: 'DS is in Main Memory (temporary) and Database is in Secondary Storage (permanent)' },
        { ar: 'مفيش فرق', en: 'No difference' },
        { ar: 'Database أصغر في الحجم', en: 'Database is smaller in size' }
      ],
      correct: 1,
      explanation: { ar: 'DS في RAM (مؤقتة)، Database في Hard Disk (دائمة)', en: 'DS in RAM (temporary), Database in Hard Disk (permanent)' }
    },
    {
      question: { ar: 'ما هي الـ Algorithm؟', en: 'What is an Algorithm?' },
      options: [
        { ar: 'نوع من الـ Data Structure', en: 'A type of Data Structure' },
        { ar: 'خطوات متسلسلة لحل مشكلة', en: 'Step by step procedure to solve a problem' },
        { ar: 'لغة برمجة', en: 'A programming language' },
        { ar: 'قاعدة بيانات', en: 'A database' }
      ],
      correct: 1,
      explanation: { ar: 'Algorithm = خطوات متسلسلة لحل مشكلة معينة', en: 'Algorithm = step by step procedure to solve a particular function' }
    },
    {
      question: { ar: 'في الـ Linear DS، كل عنصر ليه كام Predecessor؟', en: 'In Linear DS, each element has how many predecessors?' },
      options: ['0', '1', '2', { ar: 'حسب الموقع', en: 'Depends on position' }],
      correct: 1,
      explanation: { ar: 'كل عنصر ليه predecessor واحد بس (ماعدا الأول)', en: 'Each element has exactly one predecessor (except the first)' }
    },
    {
      question: { ar: 'أي من العمليات دي مش من العمليات الأساسية على الـ DS؟', en: 'Which is NOT a basic operation on DS?' },
      options: ['Insertion', 'Deletion', 'Compiling', 'Searching'],
      correct: 2,
      explanation: { ar: 'Compiling مش عملية على DS، العمليات هي: Storing, Insertion, Deletion, Searching', en: 'Compiling is not a DS operation. Basic operations: Storing, Insertion, Deletion, Searching' }
    },
    {
      question: { ar: 'الـ Linked List تنتمي لأي تصنيف؟', en: 'Linked List belongs to which classification?' },
      options: ['Primitive', 'Non-Primitive Linear', 'Non-Primitive Non-Linear', 'Static'],
      correct: 1,
      explanation: { ar: 'Linked List هيكل Non-Primitive Linear', en: 'Linked List is a Non-Primitive Linear structure' }
    },
    {
      question: { ar: 'أي من دول مش Linear Data Structure؟', en: 'Which is NOT a Linear Data Structure?' },
      options: ['Array', 'Queue', 'Graph', 'Stack'],
      correct: 2,
      explanation: { ar: 'Graph هيكل Non-Linear', en: 'Graph is a Non-Linear structure' }
    },
    {
      question: { ar: 'الـ Pointer ينتمي لأي نوع من الـ DS؟', en: 'Pointer belongs to which type of DS?' },
      options: ['Non-Primitive Linear', 'Non-Primitive Non-Linear', 'Primitive', 'Abstract'],
      correct: 2,
      explanation: { ar: 'Pointer هو Primitive Data Structure', en: 'Pointer is a Primitive Data Structure' }
    },
    {
      question: { ar: 'كفاءة الـ DS بتتقاس بإيه؟', en: 'DS efficiency is measured by?' },
      options: [
        { ar: 'الوقت بس', en: 'Time only' },
        { ar: 'المساحة بس', en: 'Space only' },
        { ar: 'الوقت والمساحة', en: 'Time and Space' },
        { ar: 'عدد الأسطر', en: 'Number of lines' }
      ],
      correct: 2,
      explanation: { ar: 'الكفاءة = Time + Space', en: 'Efficiency = Time + Space' }
    },
    {
      question: { ar: 'الـ Big O بيعبر عن أي حالة؟', en: 'Big O represents which case?' },
      options: ['Best Case', 'Average Case', 'Worst Case', 'All Cases'],
      correct: 2,
      explanation: { ar: 'Big O = Worst Case (أسوأ حالة)', en: 'Big O = Worst Case' }
    },
    {
      question: { ar: 'الـ Omega (Ω) بيعبر عن؟', en: 'Omega (Ω) represents?' },
      options: ['Worst Case', 'Best Case', 'Average Case', 'No Case'],
      correct: 1,
      explanation: { ar: 'Omega = Best Case (أفضل حالة)', en: 'Omega = Best Case' }
    },
    {
      question: { ar: 'الـ Theta (Θ) بيعبر عن؟', en: 'Theta (Θ) represents?' },
      options: ['Worst Case', 'Best Case', 'Average Case', 'Constant'],
      correct: 2,
      explanation: { ar: 'Theta = Average Case (الحالة المتوسطة)', en: 'Theta = Average Case' }
    }
  ],

  // ──────────────────────────────────────────────────────────────
  // LECTURE 2: Time Complexity
  // ──────────────────────────────────────────────────────────────
  2: [
    {
      question: { ar: 'ما هو الـ Time Complexity لـ int x = 5; int y = 10;?', en: 'What is the Time Complexity of: int x = 5; int y = 10;?' },
      options: ['O(n)', 'O(1)', 'O(n²)', 'O(log n)'],
      correct: 1,
      explanation: { ar: 'عمليات ثابتة = O(1)، بنهمل الثوابت', en: 'Constant operations = O(1), we ignore constants' }
    },
    {
      question: { ar: 'لوب for(i=1; i<=n; i++) الـ TC بتاعها؟', en: 'Loop for(i=1; i<=n; i++) has TC of?' },
      options: ['O(1)', 'O(n)', 'O(n²)', 'O(log n)'],
      correct: 1,
      explanation: { ar: 'اللوب بتلف n مرة بمقدار ثابت (i++)', en: 'Loop runs n times with constant increment (i++)' }
    },
    {
      question: { ar: 'لوب for(i=1; i<=n; i=i*2) الـ TC بتاعها؟', en: 'Loop for(i=1; i<=n; i=i*2) has TC of?' },
      options: ['O(n)', 'O(n²)', 'O(log n)', 'O(1)'],
      correct: 2,
      explanation: { ar: 'بنضرب في 2 كل مرة = O(log₂ n)', en: 'Multiplying by 2 each time = O(log₂ n)' }
    },
    {
      question: { ar: 'لوبين متداخلين كل واحد بيلف n مرة، الـ TC؟', en: 'Two nested loops each running n times, TC is?' },
      options: ['O(n)', 'O(2n)', 'O(n²)', 'O(n log n)'],
      correct: 2,
      explanation: { ar: 'n × n = n²', en: 'n × n = n²' }
    },
    {
      question: { ar: 'في If-Else، بناخد وقت أي بلوك؟', en: 'In If-Else, we take the time of which block?' },
      options: [
        { ar: 'الأقصر', en: 'The shorter one' },
        { ar: 'الأطول (Worst Case)', en: 'The longer one (Worst Case)' },
        { ar: 'المتوسط', en: 'The average' },
        { ar: 'الاتنين', en: 'Both' }
      ],
      correct: 1,
      explanation: { ar: 'Worst Case = البلوك الأطول', en: 'Worst Case = the longer block' }
    },
    {
      question: { ar: 'ما الترتيب الصحيح من الأسرع للأبطأ؟', en: 'What is the correct order from fastest to slowest?' },
      options: [
        'O(n) → O(1) → O(n²) → O(log n)',
        'O(1) → O(log n) → O(n) → O(n²)',
        'O(log n) → O(1) → O(n) → O(n²)',
        'O(1) → O(n) → O(log n) → O(n²)'
      ],
      correct: 1,
      explanation: { ar: 'الترتيب: O(1) < O(log n) < O(n) < O(n²)', en: 'Order: O(1) < O(log n) < O(n) < O(n²)' }
    },
    {
      question: { ar: 'لو كود وقته 5n + 3، الـ Big O بتاعه؟', en: 'If code time is 5n + 3, its Big O is?' },
      options: ['O(5n+3)', 'O(5n)', 'O(n)', 'O(3)'],
      correct: 2,
      explanation: { ar: 'بنهمل الثوابت والمعاملات: 5n + 3 → O(n)', en: 'Drop constants and coefficients: 5n + 3 → O(n)' }
    },
    {
      question: { ar: 'Sum = n*(n+1)/2 الـ TC بتاعها؟', en: 'Sum = n*(n+1)/2 has TC of?' },
      options: ['O(n)', 'O(n²)', 'O(1)', 'O(log n)'],
      correct: 2,
      explanation: { ar: 'معادلة رياضية = عملية ثابتة = O(1)', en: 'Mathematical formula = constant operation = O(1)' }
    },
    {
      question: { ar: 'لوب for(i=n/2; i<n; i++) الـ TC بتاعها؟', en: 'Loop for(i=n/2; i<n; i++) has TC of?' },
      options: ['O(n/2)', 'O(n)', 'O(log n)', 'O(1)'],
      correct: 1,
      explanation: { ar: 'n/2 بنهمل الـ constant (1/2) = O(n)', en: 'n/2, drop the constant (1/2) = O(n)' }
    },
    {
      question: { ar: 'لوب for(i=1; i<n; i=i*3) الـ TC؟', en: 'Loop for(i=1; i<n; i=i*3) TC is?' },
      options: ['O(n)', 'O(log₃ n)', 'O(3n)', 'O(n³)'],
      correct: 1,
      explanation: { ar: 'بنضرب في 3 = O(log₃ n)', en: 'Multiplying by 3 = O(log₃ n)' }
    },
    {
      question: { ar: 'لوب خارجية O(n) وداخلية O(log n)، النتيجة؟', en: 'Outer loop O(n) and inner O(log n), result?' },
      options: ['O(n + log n)', 'O(n × log n)', 'O(n²)', 'O(log n)'],
      correct: 1,
      explanation: { ar: 'متداخلين = نضرب: n × log n', en: 'Nested = multiply: n × log n' }
    },
    {
      question: { ar: 'أسوأ Time Complexity من دول؟', en: 'Worst Time Complexity among these?' },
      options: ['O(n log n)', 'O(n²)', 'O(2ⁿ)', 'O(n³)'],
      correct: 2,
      explanation: { ar: 'O(2ⁿ) Exponential هو الأسوأ', en: 'O(2ⁿ) Exponential is the worst' }
    },
    {
      question: { ar: 'ما هو TC الكود: for(i=0;i<n;i++){for(j=1;j<n;j=j*2){}}', en: 'TC of: for(i=0;i<n;i++){for(j=1;j<n;j=j*2){}}?' },
      options: ['O(n²)', 'O(n log n)', 'O(n)', 'O(log n)'],
      correct: 1,
      explanation: { ar: 'خارجي O(n) × داخلي O(log n) = O(n log n)', en: 'Outer O(n) × Inner O(log n) = O(n log n)' }
    },
    {
      question: { ar: 'لوب for(i=n; i>0; i=i/2)، كام مرة هتلف لو n=16؟', en: 'Loop for(i=n; i>0; i=i/2), how many times for n=16?' },
      options: ['16', '8', '4', '5'],
      correct: 3,
      explanation: { ar: 'i: 16→8→4→2→1 = 5 مرات = log₂(16) + 1', en: 'i: 16→8→4→2→1 = 5 times = log₂(16) + 1' }
    },
    {
      question: { ar: 'O(n(log n)²) ده ناتج إيه؟', en: 'O(n(log n)²) results from what?' },
      options: [
        { ar: 'لوبين عاديين', en: 'Two simple loops' },
        { ar: 'لوب عادية ولوبين لوغاريتمية', en: 'One simple loop and two logarithmic loops' },
        { ar: 'ثلاث لوبات عادية', en: 'Three simple loops' },
        { ar: 'لوب واحدة', en: 'One loop' }
      ],
      correct: 1,
      explanation: { ar: 'n × log n × log n = n(log n)²', en: 'n × log n × log n = n(log n)²' }
    },
    {
      question: { ar: 'لو عندك لوبين مش جوا بعض (متتالية)، بنعمل إيه؟', en: 'Two loops NOT nested (sequential), what do we do?' },
      options: [
        { ar: 'نضربهم', en: 'Multiply them' },
        { ar: 'نجمعهم وناخد الأكبر', en: 'Add them and take the bigger one' },
        { ar: 'نقسمهم', en: 'Divide them' },
        { ar: 'مش بنحسبهم', en: 'We don\'t calculate them' }
      ],
      correct: 1,
      explanation: { ar: 'لوبات متتالية بنجمعهم وناخد الأكبر: O(n) + O(n²) = O(n²)', en: 'Sequential loops: add and take bigger: O(n) + O(n²) = O(n²)' }
    },
    {
      question: { ar: 'ليه بنهمل الثوابت في Big O؟', en: 'Why do we ignore constants in Big O?' },
      options: [
        { ar: 'لأنها صعبة', en: 'Because they\'re hard' },
        { ar: 'لأن تأثيرها بيختفي لما n تكبر', en: 'Because their effect vanishes as n grows large' },
        { ar: 'لأنها غلط', en: 'Because they\'re wrong' },
        { ar: 'مفيش سبب', en: 'No reason' }
      ],
      correct: 1,
      explanation: { ar: 'لما n بتكون مليون، الثوابت مالهاش قيمة', en: 'When n is a million, constants become insignificant' }
    },
    {
      question: { ar: 'O(1) يعني إيه بالعربي؟', en: 'What does O(1) mean?' },
      options: [
        { ar: 'الكود بيلف مرة واحدة', en: 'Code runs once' },
        { ar: 'الوقت ثابت بغض النظر عن حجم البيانات', en: 'Time is constant regardless of data size' },
        { ar: 'الكود سريع', en: 'Code is fast' },
        { ar: 'الكود بدون لوبات', en: 'Code has no loops' }
      ],
      correct: 1,
      explanation: { ar: 'O(1) = وقت ثابت مهما كان حجم البيانات', en: 'O(1) = constant time regardless of input size' }
    },
    {
      question: { ar: 'أفضل Time Complexity للبحث؟', en: 'Best Time Complexity for searching?' },
      options: ['O(n)', 'O(n²)', 'O(1)', 'O(log n)'],
      correct: 2,
      explanation: { ar: 'O(1) أسرع TC ممكن - Direct Access', en: 'O(1) is the fastest possible TC - Direct Access' }
    },
    {
      question: { ar: 'لوب for(i=1; i*i<=n; i++)، الـ TC بتاعها؟', en: 'Loop for(i=1; i*i<=n; i++) has TC of?' },
      options: ['O(n)', 'O(n²)', 'O(√n)', 'O(log n)'],
      correct: 2,
      explanation: { ar: 'اللوب بتوقف لما i² = n، يعني i = √n', en: 'Loop stops when i² = n, so i = √n' }
    }
  ],

  // ──────────────────────────────────────────────────────────────
  // LECTURE 3: Stack
  // ──────────────────────────────────────────────────────────────
  3: [
    {
      question: { ar: 'الـ Stack بيتبع مبدأ؟', en: 'Stack follows which principle?' },
      options: ['FIFO', 'LIFO', 'Sequential Access', 'Random Access'],
      correct: 1,
      explanation: { ar: 'Stack = LIFO: Last In First Out', en: 'Stack = LIFO: Last In First Out' }
    },
    {
      question: { ar: 'عملية إضافة عنصر للـ Stack اسمها؟', en: 'Adding an element to a Stack is called?' },
      options: ['Enqueue', 'Push', 'Insert', 'Append'],
      correct: 1,
      explanation: { ar: 'Push = إضافة عنصر فوق الـ Stack', en: 'Push = adding element on top of Stack' }
    },
    {
      question: { ar: 'عملية حذف عنصر من الـ Stack اسمها؟', en: 'Removing an element from a Stack is called?' },
      options: ['Dequeue', 'Pop', 'Delete', 'Remove'],
      correct: 1,
      explanation: { ar: 'Pop = حذف العنصر اللي فوق', en: 'Pop = removing the top element' }
    },
    {
      question: { ar: 'إيه اللي بيحصل لو عملت Push على Stack ممتلئ؟', en: 'What happens if you Push to a full Stack?' },
      options: ['Stack Underflow', 'Stack Overflow', 'Segmentation Fault', 'Nothing'],
      correct: 1,
      explanation: { ar: 'Push على Stack ممتلئ = Stack Overflow', en: 'Push to full Stack = Stack Overflow' }
    },
    {
      question: { ar: 'إيه اللي بيحصل لو عملت Pop من Stack فاضي؟', en: 'What happens if you Pop from an empty Stack?' },
      options: ['Stack Overflow', 'Stack Underflow', 'Returns 0', 'Nothing'],
      correct: 1,
      explanation: { ar: 'Pop من Stack فاضي = Stack Underflow', en: 'Pop from empty Stack = Stack Underflow' }
    },
    {
      question: { ar: 'في Array Implementation، الـ top يبدأ بقيمة؟', en: 'In Array Implementation, top starts at?' },
      options: ['0', '-1', '1', 'MAX_SIZE'],
      correct: 1,
      explanation: { ar: 'top = -1 يعني الـ Stack فاضي', en: 'top = -1 means the Stack is empty' }
    },
    {
      question: { ar: 'الـ TC لعملية Push؟', en: 'TC of Push operation?' },
      options: ['O(n)', 'O(1)', 'O(log n)', 'O(n²)'],
      correct: 1,
      explanation: { ar: 'Push = O(1) وقت ثابت', en: 'Push = O(1) constant time' }
    },
    {
      question: { ar: 'الـ TC لعملية Pop؟', en: 'TC of Pop operation?' },
      options: ['O(n)', 'O(log n)', 'O(1)', 'O(n²)'],
      correct: 2,
      explanation: { ar: 'Pop = O(1) وقت ثابت', en: 'Pop = O(1) constant time' }
    },
    {
      question: { ar: 'الـ Peek/Top بتعمل إيه؟', en: 'What does Peek/Top do?' },
      options: [
        { ar: 'بتحذف العنصر اللي فوق', en: 'Removes the top element' },
        { ar: 'بتقرأ العنصر اللي فوق بدون حذف', en: 'Reads the top element without removing' },
        { ar: 'بتضيف عنصر', en: 'Adds an element' },
        { ar: 'بتفرّغ الـ Stack', en: 'Empties the Stack' }
      ],
      correct: 1,
      explanation: { ar: 'Peek = قراءة الـ top بدون حذف', en: 'Peek = reading top without removing' }
    },
    {
      question: { ar: 'لو عملنا Push(1), Push(2), Push(3), Pop() - إيه الناتج؟', en: 'Push(1), Push(2), Push(3), Pop() - what returns?' },
      options: ['1', '2', '3', 'Error'],
      correct: 2,
      explanation: { ar: '3 هو آخر عنصر دخل (LIFO)', en: '3 is the last element pushed (LIFO)' }
    },
    {
      question: { ar: 'isEmpty() بترجع true لما؟', en: 'isEmpty() returns true when?' },
      options: ['top == 0', 'top == -1', 'top == MAX_SIZE', 'top == 1'],
      correct: 1,
      explanation: { ar: 'top == -1 يعني الـ Stack فاضي', en: 'top == -1 means Stack is empty' }
    },
    {
      question: { ar: 'isFull() بترجع true لما؟', en: 'isFull() returns true when?' },
      options: ['top == 0', 'top == -1', 'top == MAX_SIZE - 1', 'top == MAX_SIZE'],
      correct: 2,
      explanation: { ar: 'top == MAX_SIZE - 1 يعني الـ Stack ممتلئ', en: 'top == MAX_SIZE - 1 means Stack is full' }
    },
    {
      question: { ar: 'الـ Stack ليه كام طرف؟', en: 'A Stack has how many ends?' },
      options: ['0', '1', '2', '3'],
      correct: 1,
      explanation: { ar: 'طرف واحد بس = الـ Top', en: 'Only one end = the Top' }
    },
    {
      question: { ar: 'Push(5) بتعمل إيه بالظبط؟', en: 'What does Push(5) do exactly?' },
      options: [
        'arr[top] = 5; top++;',
        'top++; arr[top] = 5;',
        'arr[++top] = 5;',
        { ar: 'الاتنين B و C صح', en: 'Both B and C are correct' }
      ],
      correct: 3,
      explanation: { ar: 'top++ الأول ثم نحط القيمة - أو ++top في نفس السطر', en: 'Increment top first then assign - or use ++top inline' }
    },
    {
      question: { ar: 'Pop() بتعمل إيه بالظبط؟', en: 'What does Pop() do exactly?' },
      options: [
        'return arr[top]; top--;',
        'return arr[top--];',
        'top--; return arr[top];',
        { ar: 'الاتنين A و B صح', en: 'Both A and B are correct' }
      ],
      correct: 3,
      explanation: { ar: 'نرجّع القيمة ونقلل الـ top', en: 'Return the value and decrement top' }
    },
    {
      question: { ar: 'أنهي تطبيق من تطبيقات الـ Stack؟', en: 'Which is an application of Stack?' },
      options: [
        { ar: 'تحويل Infix لـ Postfix', en: 'Converting Infix to Postfix' },
        { ar: 'طباعة مستند', en: 'Printing a document' },
        { ar: 'فرز بريد', en: 'Sorting mail' },
        { ar: 'حجز مطعم', en: 'Restaurant reservation' }
      ],
      correct: 0,
      explanation: { ar: 'تحويل التعبيرات الرياضية من أشهر تطبيقات الـ Stack', en: 'Expression conversion is a famous Stack application' }
    },
    {
      question: { ar: 'لو Push(A), Push(B), Pop(), Push(C), Pop(), Pop() - ترتيب الخروج؟', en: 'Push(A), Push(B), Pop(), Push(C), Pop(), Pop() - exit order?' },
      options: ['A, B, C', 'B, C, A', 'C, B, A', 'A, C, B'],
      correct: 1,
      explanation: { ar: 'Pop B ثم Pop C ثم Pop A (LIFO)', en: 'Pop B, then Pop C, then Pop A (LIFO)' }
    },
    {
      question: { ar: 'الـ Stack بيشبه إيه في الحياة الحقيقية؟', en: 'Stack resembles what in real life?' },
      options: [
        { ar: 'طابور البنك', en: 'Bank queue' },
        { ar: 'رصة أطباق', en: 'Stack of plates' },
        { ar: 'شجرة', en: 'A tree' },
        { ar: 'خريطة طرق', en: 'Road map' }
      ],
      correct: 1,
      explanation: { ar: 'رصة الأطباق = LIFO - آخر طبق بتشيله الأول', en: 'Stack of plates = LIFO - last plate placed is first removed' }
    },
    {
      question: { ar: 'كام عنصر ممكن نشيل من الـ Stack في المرة الواحدة؟', en: 'How many elements can be removed at a time from Stack?' },
      options: ['1', '2', 'n', { ar: 'حسب الحجم', en: 'Depends on size' }],
      correct: 0,
      explanation: { ar: 'عنصر واحد بس في كل Pop (الـ Top بس)', en: 'Only one element per Pop (the Top only)' }
    },
    {
      question: { ar: 'لو الـ Stack حجمه 5 والـ top = 4، الـ Stack؟', en: 'If Stack size is 5 and top = 4, the Stack is?' },
      options: [
        { ar: 'فاضي', en: 'Empty' },
        { ar: 'ممتلئ', en: 'Full' },
        { ar: 'فيه عنصر واحد', en: 'Has one element' },
        { ar: 'نص ممتلئ', en: 'Half full' }
      ],
      correct: 1,
      explanation: { ar: 'top = MAX_SIZE - 1 = 5-1 = 4 يعني ممتلئ', en: 'top = MAX_SIZE - 1 = 5-1 = 4 means full' }
    }
  ],

  // ──────────────────────────────────────────────────────────────
  // LECTURE 4: Stack Applications
  // ──────────────────────────────────────────────────────────────
  4: [
    {
      question: { ar: 'A + B دي تعبير من نوع؟', en: 'A + B is what type of expression?' },
      options: ['Prefix', 'Postfix', 'Infix', 'Invalid'],
      correct: 2,
      explanation: { ar: 'العامل بين المعاملين = Infix', en: 'Operator between operands = Infix' }
    },
    {
      question: { ar: 'A B + دي تعبير من نوع؟', en: 'A B + is what type of expression?' },
      options: ['Infix', 'Prefix', 'Postfix', 'Invalid'],
      correct: 2,
      explanation: { ar: 'العامل بعد المعاملين = Postfix', en: 'Operator after operands = Postfix' }
    },
    {
      question: { ar: '+ A B دي تعبير من نوع؟', en: '+ A B is what type of expression?' },
      options: ['Infix', 'Postfix', 'Prefix', 'Invalid'],
      correct: 2,
      explanation: { ar: 'العامل قبل المعاملين = Prefix', en: 'Operator before operands = Prefix' }
    },
    {
      question: { ar: 'ليه الكمبيوتر بيفضل الـ Postfix؟', en: 'Why does the computer prefer Postfix?' },
      options: [
        { ar: 'أسهل في الكتابة', en: 'Easier to write' },
        { ar: 'مش محتاج أقواس ولا أولويات', en: 'No parentheses or precedence needed' },
        { ar: 'أقصر في الطول', en: 'Shorter in length' },
        { ar: 'أجمل شكلاً', en: 'Looks prettier' }
      ],
      correct: 1,
      explanation: { ar: 'Postfix مش محتاج أقواس ولا أولويات عمليات', en: 'Postfix needs no parentheses or operator precedence' }
    },
    {
      question: { ar: 'ترتيب أولويات العمليات: ^ ثم * / ثم + -. أيهم الأعلى؟', en: 'Operator precedence: ^ then * / then + -. Which is highest?' },
      options: ['+', '*', '^', '-'],
      correct: 2,
      explanation: { ar: '^ (Power) أعلى أولوية', en: '^ (Power) has highest precedence' }
    },
    {
      question: { ar: 'A + B * C الـ Postfix بتاعها؟', en: 'A + B * C in Postfix is?' },
      options: ['AB+C*', 'ABC*+', 'A+BC*', 'ABC+*'],
      correct: 1,
      explanation: { ar: '* أولوية أعلى: B*C الأول = BC* ثم A + = ABC*+', en: '* higher precedence: B*C first = BC* then A + = ABC*+' }
    },
    {
      question: { ar: '(A + B) * C الـ Postfix بتاعها؟', en: '(A + B) * C in Postfix is?' },
      options: ['ABC*+', 'AB+C*', 'ABC+*', 'A+BC*'],
      correct: 1,
      explanation: { ar: 'القوس يغير الأولوية: A+B الأول = AB+ ثم *C = AB+C*', en: 'Parentheses change precedence: A+B first = AB+ then *C = AB+C*' }
    },
    {
      question: { ar: 'في تحويل Infix لـ Postfix لما نلاقي Operand بنعمل إيه؟', en: 'When converting Infix to Postfix, when we find an Operand we?' },
      options: [
        { ar: 'Push في الـ Stack', en: 'Push to Stack' },
        { ar: 'نحطه في النتيجة مباشرة', en: 'Add directly to Output' },
        { ar: 'نتجاهله', en: 'Ignore it' },
        { ar: 'نحذف الـ Stack', en: 'Clear the Stack' }
      ],
      correct: 1,
      explanation: { ar: 'Operand بيروح للـ Output مباشرة', en: 'Operand goes directly to Output' }
    },
    {
      question: { ar: 'في تحويل Infix لـ Postfix لما نلاقي "(" بنعمل إيه؟', en: 'Converting Infix to Postfix, when we find "(" we?' },
      options: ['Add to Output', 'Push to Stack', 'Ignore', 'Pop Stack'],
      correct: 1,
      explanation: { ar: '"(" بنعمله Push في الـ Stack', en: '"(" is Pushed to Stack' }
    },
    {
      question: { ar: 'في تحويل Infix لـ Postfix لما نلاقي ")" بنعمل إيه؟', en: 'Converting Infix to Postfix, when we find ")" we?' },
      options: [
        { ar: 'Push في الـ Stack', en: 'Push to Stack' },
        { ar: 'Pop حتى نلاقي "(" ونحذفه', en: 'Pop until "(" and discard it' },
        { ar: 'نتجاهله', en: 'Ignore it' },
        { ar: 'نحطه في النتيجة', en: 'Add to Output' }
      ],
      correct: 1,
      explanation: { ar: 'Pop ونحط في الـ Output لحد ما نلاقي "(" ونحذفه', en: 'Pop to Output until "(" is found, then discard "("' }
    },
    {
      question: { ar: 'حساب: 2 3 4 * + = ؟', en: 'Evaluate: 2 3 4 * + = ?' },
      options: ['20', '14', '24', '9'],
      correct: 1,
      explanation: { ar: '3*4=12 ثم 2+12=14', en: '3*4=12 then 2+12=14' }
    },
    {
      question: { ar: 'حساب: 5 3 + 2 * = ؟', en: 'Evaluate: 5 3 + 2 * = ?' },
      options: ['11', '16', '13', '26'],
      correct: 1,
      explanation: { ar: '5+3=8 ثم 8*2=16', en: '5+3=8 then 8*2=16' }
    },
    {
      question: { ar: 'في حساب Postfix، لما نلاقي رقم بنعمل إيه؟', en: 'In Postfix evaluation, when we find a number we?' },
      options: ['Pop', 'Push', 'Add to Output', 'Ignore'],
      correct: 1,
      explanation: { ar: 'الرقم (Operand) بنعمله Push في الـ Stack', en: 'Number (Operand) is Pushed to Stack' }
    },
    {
      question: { ar: 'في حساب Postfix، لما نلاقي عامل بنعمل إيه؟', en: 'In Postfix evaluation, when we find an operator we?' },
      options: [
        { ar: 'Push في الـ Stack', en: 'Push to Stack' },
        { ar: 'Pop عنصرين ونعمل العملية ونـ Push النتيجة', en: 'Pop two elements, perform operation, Push result' },
        { ar: 'نحذف الـ Stack', en: 'Clear Stack' },
        { ar: 'نتجاهله', en: 'Ignore it' }
      ],
      correct: 1,
      explanation: { ar: 'Pop عنصرين → عملية → Push النتيجة', en: 'Pop two → operate → Push result' }
    },
    {
      question: { ar: 'A * B + C / D الـ Postfix بتاعها؟', en: 'A * B + C / D in Postfix is?' },
      options: ['AB*CD/+', 'ABCD*/+', 'AB*+CD/', 'ABCD+*/'],
      correct: 0,
      explanation: { ar: '* و / أولوية متساوية: A*B = AB* ثم C/D = CD/ ثم + = AB*CD/+', en: '* and / equal precedence: A*B = AB*, C/D = CD/, then + = AB*CD/+' }
    },
    {
      question: { ar: 'الـ Postfix اسم تاني ليه؟', en: 'Postfix has another name which is?' },
      options: ['Polish Notation', 'Reverse Polish Notation', 'Hungarian Notation', 'German Notation'],
      correct: 1,
      explanation: { ar: 'Postfix = Reverse Polish Notation (RPN)', en: 'Postfix = Reverse Polish Notation (RPN)' }
    },
    {
      question: { ar: 'الـ Prefix اسم تاني ليه؟', en: 'Prefix has another name which is?' },
      options: ['Reverse Polish', 'Polish Notation', 'German Notation', 'Hungarian Notation'],
      correct: 1,
      explanation: { ar: 'Prefix = Polish Notation', en: 'Prefix = Polish Notation' }
    },
    {
      question: { ar: 'A + B - C الـ Postfix بتاعها؟', en: 'A + B - C in Postfix is?' },
      options: ['ABC+-', 'AB+C-', 'ABC-+', '-+ABC'],
      correct: 1,
      explanation: { ar: '+ و - نفس الأولوية من الشمال: A+B=AB+ ثم -C=AB+C-', en: 'Same precedence left to right: A+B=AB+ then -C=AB+C-' }
    },
    {
      question: { ar: 'حساب: 3 4 + 5 * 6 - = ؟', en: 'Evaluate: 3 4 + 5 * 6 - = ?' },
      options: ['29', '27', '35', '41'],
      correct: 0,
      explanation: { ar: '3+4=7 ثم 7*5=35 ثم 35-6=29', en: '3+4=7 then 7*5=35 then 35-6=29' }
    },
    {
      question: { ar: 'في نهاية حساب Postfix expression صحيح، الـ Stack فيه كام عنصر؟', en: 'At end of valid Postfix evaluation, Stack has how many elements?' },
      options: ['0', '1', '2', { ar: 'حسب التعبير', en: 'Depends on expression' }],
      correct: 1,
      explanation: { ar: 'عنصر واحد = النتيجة النهائية', en: 'One element = the final result' }
    }
  ],

  // ──────────────────────────────────────────────────────────────
  // LECTURE 5: Linked Lists (Part 1)
  // ──────────────────────────────────────────────────────────────
  5: [
    {
      question: { ar: 'كل Node في Singly Linked List بتتكون من إيه؟', en: 'Each Node in a Singly Linked List consists of?' },
      options: ['Data only', 'Data + Next', 'Data + Next + Prev', 'Data + Index'],
      correct: 1,
      explanation: { ar: 'Node = Data + Next (pointer للعقدة التالية)', en: 'Node = Data + Next (pointer to next node)' }
    },
    {
      question: { ar: 'آخر Node في الـ Linked List الـ Next بتاعها بيساوي؟', en: 'The Next of the last Node in a Linked List equals?' },
      options: ['0', '-1', 'NULL', 'HEAD'],
      correct: 2,
      explanation: { ar: 'آخر Node بتشاور على NULL', en: 'Last Node points to NULL' }
    },
    {
      question: { ar: 'الـ TC للإضافة في بداية الـ Linked List؟', en: 'TC of inserting at beginning of Linked List?' },
      options: ['O(n)', 'O(1)', 'O(log n)', 'O(n²)'],
      correct: 1,
      explanation: { ar: 'الإضافة في البداية = O(1) الأسرع', en: 'Insert at beginning = O(1) fastest' }
    },
    {
      question: { ar: 'الـ TC للإضافة في نهاية الـ Linked List؟', en: 'TC of inserting at end of Linked List?' },
      options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'],
      correct: 1,
      explanation: { ar: 'لازم نمشي للآخر = O(n)', en: 'Must traverse to end = O(n)' }
    },
    {
      question: { ar: 'الفرق الأساسي بين Array و Linked List؟', en: 'Main difference between Array and Linked List?' },
      options: [
        { ar: 'Array أسرع دايماً', en: 'Array is always faster' },
        { ar: 'Array ثابت الحجم و LL ديناميكي', en: 'Array is fixed size, LL is dynamic' },
        { ar: 'مفيش فرق', en: 'No difference' },
        { ar: 'LL أسرع دايماً', en: 'LL is always faster' }
      ],
      correct: 1,
      explanation: { ar: 'Array = fixed size / Linked List = dynamic size', en: 'Array = fixed size / Linked List = dynamic size' }
    },
    {
      question: { ar: 'الـ head في الـ Linked List هو؟', en: 'The head in a Linked List is?' },
      options: [
        { ar: 'Pointer بيشاور على أول Node', en: 'Pointer to the first Node' },
        { ar: 'آخر Node', en: 'The last Node' },
        { ar: 'حجم الـ List', en: 'Size of the List' },
        { ar: 'نوع البيانات', en: 'Data type' }
      ],
      correct: 0,
      explanation: { ar: 'head = Pointer لأول Node في الـ List', en: 'head = Pointer to the first Node in the List' }
    },
    {
      question: { ar: 'إيه هي الكلمة المفتاحية لحجز ذاكرة جديدة للـ Node؟', en: 'What keyword allocates new memory for a Node?' },
      options: ['malloc', 'new', 'create', 'alloc'],
      correct: 1,
      explanation: { ar: 'في C++ بنستخدم new لحجز ذاكرة', en: 'In C++ we use new to allocate memory' }
    },
    {
      question: { ar: 'node->data بتوصلنا لإيه؟', en: 'node->data accesses what?' },
      options: [
        { ar: 'العقدة التالية', en: 'Next node' },
        { ar: 'البيانات المخزنة في العقدة', en: 'Data stored in the node' },
        { ar: 'عنوان العقدة', en: 'Address of node' },
        { ar: 'حجم العقدة', en: 'Size of node' }
      ],
      correct: 1,
      explanation: { ar: '-> بتوصل للعنصر اللي جوا الـ pointer، data = البيانات', en: '-> accesses member through pointer, data = the stored value' }
    },
    {
      question: { ar: 'في Traversal للـ Linked List، إمتى بنوقف؟', en: 'When traversing a Linked List, when do we stop?' },
      options: [
        { ar: 'لما العداد يوصل لـ n', en: 'When counter reaches n' },
        { ar: 'لما نوصل لـ NULL', en: 'When we reach NULL' },
        { ar: 'بعد 100 لفة', en: 'After 100 iterations' },
        { ar: 'مش بنوقف', en: 'We never stop' }
      ],
      correct: 1,
      explanation: { ar: 'while(temp != NULL) - بنوقف لما نوصل لـ NULL', en: 'while(temp != NULL) - stop when we reach NULL' }
    },
    {
      question: { ar: 'الـ Array بيوفر Access بوقت؟', en: 'Array provides access in time?' },
      options: ['O(n)', 'O(1)', 'O(log n)', 'O(n²)'],
      correct: 1,
      explanation: { ar: 'Direct Access بالـ Index = O(1)', en: 'Direct Access by Index = O(1)' }
    },
    {
      question: { ar: 'الـ Linked List بيوفر Access بوقت؟', en: 'Linked List provides access in time?' },
      options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'],
      correct: 1,
      explanation: { ar: 'لازم نمشي من الـ head = O(n)', en: 'Must traverse from head = O(n)' }
    },
    {
      question: { ar: 'في Insert at Beginning عملية إيه بتحصل؟', en: 'In Insert at Beginning, what operation occurs?' },
      options: [
        { ar: 'newNode->next = head; head = newNode;', en: 'newNode->next = head; head = newNode;' },
        { ar: 'head = newNode; newNode->next = NULL;', en: 'head = newNode; newNode->next = NULL;' },
        { ar: 'newNode = head;', en: 'newNode = head;' },
        { ar: 'head->next = newNode;', en: 'head->next = newNode;' }
      ],
      correct: 0,
      explanation: { ar: 'الـ newNode بيشاور على الـ head القديم ثم الـ head يبقى newNode', en: 'newNode points to old head, then head becomes newNode' }
    },
    {
      question: { ar: 'إيه الميزة الرئيسية للـ Linked List عن الـ Array؟', en: 'Main advantage of Linked List over Array?' },
      options: [
        { ar: 'أسرع في البحث', en: 'Faster searching' },
        { ar: 'حجم ديناميكي يزيد وينقص', en: 'Dynamic size that grows and shrinks' },
        { ar: 'أبسط في الكتابة', en: 'Simpler to write' },
        { ar: 'بتاخد ذاكرة أقل', en: 'Takes less memory' }
      ],
      correct: 1,
      explanation: { ar: 'Linked List حجمها ديناميكي عكس الـ Array الثابت', en: 'Linked List has dynamic size unlike fixed Array' }
    },
    {
      question: { ar: 'Node* head = NULL; يعني إيه؟', en: 'Node* head = NULL; means?' },
      options: [
        { ar: 'الـ List فاضي', en: 'The List is empty' },
        { ar: 'الـ List ممتلئ', en: 'The List is full' },
        { ar: 'خطأ في الكود', en: 'Code error' },
        { ar: 'الـ head بيشاور على آخر عنصر', en: 'Head points to last element' }
      ],
      correct: 0,
      explanation: { ar: 'head = NULL يعني الـ List فاضي', en: 'head = NULL means the List is empty' }
    },
    {
      question: { ar: 'temp = temp->next; بتعمل إيه؟', en: 'temp = temp->next; does what?' },
      options: [
        { ar: 'بتحذف العقدة الحالية', en: 'Deletes current node' },
        { ar: 'بتنقل للعقدة التالية', en: 'Moves to the next node' },
        { ar: 'بتضيف عقدة جديدة', en: 'Adds a new node' },
        { ar: 'بتطبع البيانات', en: 'Prints the data' }
      ],
      correct: 1,
      explanation: { ar: 'بننقل الـ pointer للعقدة اللي بعدها', en: 'Move the pointer to the next node' }
    },
    {
      question: { ar: 'الـ TC للبحث في Linked List؟', en: 'TC of searching in Linked List?' },
      options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
      correct: 2,
      explanation: { ar: 'في أسوأ حالة لازم نمشي العناصر كلها = O(n)', en: 'Worst case must traverse all elements = O(n)' }
    },
    {
      question: { ar: 'الـ Deletion من بداية Linked List بياخد؟', en: 'Deletion from beginning of Linked List takes?' },
      options: ['O(n)', 'O(1)', 'O(log n)', 'O(n²)'],
      correct: 1,
      explanation: { ar: 'نغير الـ head بس = O(1)', en: 'Just change head = O(1)' }
    },
    {
      question: { ar: 'new Node{10, NULL} بتعمل إيه؟', en: 'new Node{10, NULL} does what?' },
      options: [
        { ar: 'بتحجز Node جديدة بقيمة 10 والـ next = NULL', en: 'Allocates new Node with value 10 and next = NULL' },
        { ar: 'بتحذف Node بقيمة 10', en: 'Deletes Node with value 10' },
        { ar: 'بتبحث عن 10', en: 'Searches for 10' },
        { ar: 'بتطبع 10', en: 'Prints 10' }
      ],
      correct: 0,
      explanation: { ar: 'new بتحجز ذاكرة، {10, NULL} = data=10, next=NULL', en: 'new allocates memory, {10, NULL} = data=10, next=NULL' }
    }
  ],

  // ──────────────────────────────────────────────────────────────
  // LECTURE 6: Linked Lists (Part 2)
  // ──────────────────────────────────────────────────────────────
  6: [
    {
      question: { ar: 'كل Node في Doubly Linked List بتتكون من إيه؟', en: 'Each Node in Doubly LL consists of?' },
      options: ['Data + Next', 'Data + Prev', 'Data + Next + Prev', 'Data only'],
      correct: 2,
      explanation: { ar: 'Doubly Node = Data + Next + Prev', en: 'Doubly Node = Data + Next + Prev' }
    },
    {
      question: { ar: 'في الـ Circular Linked List، آخر Node بتشاور على؟', en: 'In Circular LL, the last Node points to?' },
      options: ['NULL', { ar: 'أول Node (الـ head)', en: 'First Node (head)' }, '-1', '0'],
      correct: 1,
      explanation: { ar: 'آخر Node → head (بتلف في دائرة)', en: 'Last Node → head (forms a circle)' }
    },
    {
      question: { ar: 'ميزة الـ Doubly LL عن الـ Singly LL؟', en: 'Advantage of Doubly LL over Singly LL?' },
      options: [
        { ar: 'أقل ذاكرة', en: 'Less memory' },
        { ar: 'التنقل في الاتجاهين', en: 'Bidirectional traversal' },
        { ar: 'أسرع في البحث', en: 'Faster search' },
        { ar: 'أبسط في الكود', en: 'Simpler code' }
      ],
      correct: 1,
      explanation: { ar: 'Doubly = تنقل في اتجاهين (أمام وخلف)', en: 'Doubly = bidirectional traversal (forward and backward)' }
    },
    {
      question: { ar: 'عيب الـ Doubly LL؟', en: 'Disadvantage of Doubly LL?' },
      options: [
        { ar: 'بطيء جداً', en: 'Very slow' },
        { ar: 'بتاخد ذاكرة أكتر (Prev pointer إضافي)', en: 'Takes more memory (extra Prev pointer)' },
        { ar: 'مش بتشتغل', en: 'Doesn\'t work' },
        { ar: 'مش بتدعم الحذف', en: 'Doesn\'t support deletion' }
      ],
      correct: 1,
      explanation: { ar: 'Prev pointer بياخد مساحة إضافية لكل Node', en: 'Prev pointer takes extra space per Node' }
    },
    {
      question: { ar: 'الـ Singly LL بتسمح بالتنقل في كام اتجاه؟', en: 'Singly LL allows traversal in how many directions?' },
      options: ['0', '1', '2', '3'],
      correct: 1,
      explanation: { ar: 'اتجاه واحد بس (للأمام)', en: 'One direction only (forward)' }
    },
    {
      question: { ar: 'الـ Doubly LL بتسمح بالتنقل في كام اتجاه؟', en: 'Doubly LL allows traversal in how many directions?' },
      options: ['0', '1', '2', '3'],
      correct: 2,
      explanation: { ar: 'اتجاهين (أمام وخلف)', en: 'Two directions (forward and backward)' }
    },
    {
      question: { ar: 'في Circular LL، إمتى نعرف إننا لفينا دورة كاملة؟', en: 'In Circular LL, how do we know we\'ve completed a cycle?' },
      options: [
        { ar: 'لما نوصل لـ NULL', en: 'When we reach NULL' },
        { ar: 'لما نرجع للـ head تاني', en: 'When we return to head again' },
        { ar: 'بعد n لفة', en: 'After n iterations' },
        { ar: 'مش ممكن نعرف', en: 'We can\'t know' }
      ],
      correct: 1,
      explanation: { ar: 'بنوقف لما الـ current node يرجع يساوي الـ head', en: 'Stop when current node equals head again' }
    },
    {
      question: { ar: 'الـ Insert at Beginning في Array بياخد؟', en: 'Insert at Beginning in Array takes?' },
      options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'],
      correct: 1,
      explanation: { ar: 'لازم نزحلق كل العناصر = O(n)', en: 'Must shift all elements = O(n)' }
    },
    {
      question: { ar: 'الـ Random Access متاح في؟', en: 'Random Access is available in?' },
      options: ['Linked List', 'Array', { ar: 'الاتنين', en: 'Both' }, { ar: 'ولا واحد', en: 'Neither' }],
      correct: 1,
      explanation: { ar: 'Array بيوفر Random Access بالـ Index', en: 'Array provides Random Access by Index' }
    },
    {
      question: { ar: 'أنهي نوع LL مش فيه NULL خالص؟', en: 'Which LL type has no NULL at all?' },
      options: ['Singly', 'Doubly', 'Circular', { ar: 'كلهم فيهم NULL', en: 'All have NULL' }],
      correct: 2,
      explanation: { ar: 'Circular LL مفيهاش NULL - آخر Node بتشاور على الـ head', en: 'Circular LL has no NULL - last Node points to head' }
    }
  ],

  // ──────────────────────────────────────────────────────────────
  // LECTURE 7: Queue (Part 1)
  // ──────────────────────────────────────────────────────────────
  7: [
    {
      question: { ar: 'الـ Queue بيتبع مبدأ؟', en: 'Queue follows which principle?' },
      options: ['LIFO', 'FIFO', 'Priority', 'Random'],
      correct: 1,
      explanation: { ar: 'Queue = FIFO: First In First Out', en: 'Queue = FIFO: First In First Out' }
    },
    {
      question: { ar: 'الإضافة للـ Queue اسمها؟', en: 'Adding to Queue is called?' },
      options: ['Push', 'Enqueue', 'Insert', 'Append'],
      correct: 1,
      explanation: { ar: 'Enqueue = إضافة عنصر في الـ Rear', en: 'Enqueue = adding element at Rear' }
    },
    {
      question: { ar: 'الحذف من الـ Queue اسمه؟', en: 'Removing from Queue is called?' },
      options: ['Pop', 'Dequeue', 'Delete', 'Remove'],
      correct: 1,
      explanation: { ar: 'Dequeue = حذف عنصر من الـ Front', en: 'Dequeue = removing element from Front' }
    },
    {
      question: { ar: 'الـ Queue ليه كام طرف؟', en: 'A Queue has how many ends?' },
      options: ['1', '2', '3', '0'],
      correct: 1,
      explanation: { ar: 'طرفين: Front (للحذف) و Rear (للإضافة)', en: 'Two ends: Front (removal) and Rear (addition)' }
    },
    {
      question: { ar: 'العناصر بتنضاف من أي طرف في الـ Queue؟', en: 'Elements are added from which end in Queue?' },
      options: ['Front', 'Rear', 'Middle', 'Top'],
      correct: 1,
      explanation: { ar: 'الإضافة من الـ Rear (الخلف)', en: 'Addition at the Rear (back)' }
    },
    {
      question: { ar: 'العناصر بتنحذف من أي طرف في الـ Queue؟', en: 'Elements are removed from which end in Queue?' },
      options: ['Rear', 'Front', 'Middle', 'Bottom'],
      correct: 1,
      explanation: { ar: 'الحذف من الـ Front (الأمام)', en: 'Removal from the Front' }
    },
    {
      question: { ar: 'Enqueue(1), Enqueue(2), Enqueue(3), Dequeue() - إيه الناتج؟', en: 'Enqueue(1), Enqueue(2), Enqueue(3), Dequeue() - result?' },
      options: ['3', '2', '1', 'Error'],
      correct: 2,
      explanation: { ar: '1 هو أول عنصر دخل (FIFO)', en: '1 is the first element enqueued (FIFO)' }
    },
    {
      question: { ar: 'الـ TC لعمليتي Enqueue و Dequeue؟', en: 'TC of Enqueue and Dequeue operations?' },
      options: ['O(n)', 'O(1)', 'O(log n)', 'O(n²)'],
      correct: 1,
      explanation: { ar: 'كلاهما O(1) - وقت ثابت', en: 'Both O(1) - constant time' }
    },
    {
      question: { ar: 'في Array Implementation، الـ front و rear يبدأوا بقيمة؟', en: 'In Array Implementation, front and rear start at?' },
      options: ['0', '-1', '1', 'MAX'],
      correct: 1,
      explanation: { ar: 'front = rear = -1 في البداية', en: 'front = rear = -1 initially' }
    },
    {
      question: { ar: 'الـ Queue بيشبه إيه في الحياة؟', en: 'Queue resembles what in real life?' },
      options: [
        { ar: 'رصة أطباق', en: 'Stack of plates' },
        { ar: 'طابور الناس', en: 'Queue of people' },
        { ar: 'شجرة', en: 'A tree' },
        { ar: 'كتاب', en: 'A book' }
      ],
      correct: 1,
      explanation: { ar: 'طابور الناس: أول واحد جه أول واحد يتخدم = FIFO', en: 'Queue of people: first come first served = FIFO' }
    }
  ],

  // ──────────────────────────────────────────────────────────────
  // LECTURE 8: Queue (Part 2)
  // ──────────────────────────────────────────────────────────────
  8: [
    {
      question: { ar: 'مشكلة الـ Linear Queue الأساسية؟', en: 'Main problem of Linear Queue?' },
      options: [
        { ar: 'بطيء', en: 'Slow' },
        { ar: 'الأماكن الفاضية بعد Dequeue مش بتتستخدم تاني', en: 'Empty spaces after Dequeue are not reused' },
        { ar: 'مش بيشتغل', en: 'Doesn\'t work' },
        { ar: 'بياخد ذاكرة كتير', en: 'Takes too much memory' }
      ],
      correct: 1,
      explanation: { ar: 'الأماكن الفاضية بتضيع ومش بنقدر نستخدمها', en: 'Vacated spaces are wasted and cannot be reused' }
    },
    {
      question: { ar: 'الحل لمشكلة الـ Linear Queue؟', en: 'Solution to Linear Queue problem?' },
      options: ['Bigger Array', 'Circular Queue', 'Stack', 'Linked List'],
      correct: 1,
      explanation: { ar: 'Circular Queue بيحل مشكلة هدر المساحة', en: 'Circular Queue solves the space waste problem' }
    },
    {
      question: { ar: 'في Circular Queue بنستخدم عملية إيه للف؟', en: 'In Circular Queue, what operation is used to wrap around?' },
      options: ['Division /', 'Modulo %', 'Multiplication *', 'Addition +'],
      correct: 1,
      explanation: { ar: '% (Modulo) للف في الدائرة', en: '% (Modulo) to wrap around the circle' }
    },
    {
      question: { ar: 'rear = (rear + 1) % MAX بتعمل إيه؟', en: 'rear = (rear + 1) % MAX does what?' },
      options: [
        { ar: 'بتنقل الـ rear للأمام أو تلف من الآخر للأول', en: 'Moves rear forward or wraps from end to beginning' },
        { ar: 'بتحذف عنصر', en: 'Deletes an element' },
        { ar: 'بتعد العناصر', en: 'Counts elements' },
        { ar: 'بتعمل Reset', en: 'Resets queue' }
      ],
      correct: 0,
      explanation: { ar: 'Modulo بيخلي الـ index يلف من الآخر للأول', en: 'Modulo makes index wrap from end to beginning' }
    },
    {
      question: { ar: 'شرط إن الـ Circular Queue ممتلئ؟', en: 'Condition for Circular Queue being full?' },
      options: [
        'rear == MAX',
        '(rear + 1) % MAX == front',
        'front == rear',
        'front == -1'
      ],
      correct: 1,
      explanation: { ar: 'لما الـ rear اللي بعده يكون الـ front يعني ممتلئ', en: 'When next rear position equals front, it\'s full' }
    },
    {
      question: { ar: 'في الـ Priority Queue، مين اللي بيخرج الأول؟', en: 'In Priority Queue, who exits first?' },
      options: [
        { ar: 'أول عنصر دخل', en: 'First element entered' },
        { ar: 'آخر عنصر دخل', en: 'Last element entered' },
        { ar: 'العنصر ذو الأولوية الأعلى', en: 'Element with highest priority' },
        { ar: 'عشوائي', en: 'Random' }
      ],
      correct: 2,
      explanation: { ar: 'Priority Queue: الأعلى أولوية بيخرج الأول', en: 'Priority Queue: highest priority exits first' }
    },
    {
      question: { ar: 'الـ Circular Queue بيحل مشكلة إيه؟', en: 'Circular Queue solves what problem?' },
      options: [
        { ar: 'السرعة', en: 'Speed' },
        { ar: 'هدر المساحة في Linear Queue', en: 'Space waste in Linear Queue' },
        { ar: 'الأمان', en: 'Security' },
        { ar: 'التصميم', en: 'Design' }
      ],
      correct: 1,
      explanation: { ar: 'بيعيد استخدام الأماكن الفاضية بعد Dequeue', en: 'Reuses vacated spaces after Dequeue' }
    },
    {
      question: { ar: 'مثال على Priority Queue في الحياة؟', en: 'Real life example of Priority Queue?' },
      options: [
        { ar: 'طابور البنك', en: 'Bank queue' },
        { ar: 'غرفة الطوارئ في المستشفى', en: 'Hospital ER' },
        { ar: 'رصة أطباق', en: 'Stack of plates' },
        { ar: 'مكتبة كتب', en: 'Book library' }
      ],
      correct: 1,
      explanation: { ar: 'المريض الأخطر بيتعالج الأول بغض النظر عن وقت الوصول', en: 'Most critical patient treated first regardless of arrival time' }
    },
    {
      question: { ar: 'لو Circular Queue حجمه 5 والـ rear = 4، بعد Enqueue الـ rear هيبقى؟', en: 'If Circular Queue size 5, rear = 4, after Enqueue rear becomes?' },
      options: ['5', '0', '-1', '4'],
      correct: 1,
      explanation: { ar: '(4+1) % 5 = 0 → بيلف للبداية', en: '(4+1) % 5 = 0 → wraps to beginning' }
    },
    {
      question: { ar: 'الفرق بين Stack و Queue؟', en: 'Difference between Stack and Queue?' },
      options: [
        { ar: 'Stack = LIFO, Queue = FIFO', en: 'Stack = LIFO, Queue = FIFO' },
        { ar: 'Stack = FIFO, Queue = LIFO', en: 'Stack = FIFO, Queue = LIFO' },
        { ar: 'مفيش فرق', en: 'No difference' },
        { ar: 'Stack أسرع', en: 'Stack is faster' }
      ],
      correct: 0,
      explanation: { ar: 'Stack = LIFO (آخر واحد يخرج الأول) / Queue = FIFO (أول واحد يخرج الأول)', en: 'Stack = LIFO / Queue = FIFO' }
    }
  ],

  // ──────────────────────────────────────────────────────────────
  // LECTURE 9: Trees
  // ──────────────────────────────────────────────────────────────
  9: [
    {
      question: { ar: 'الـ Tree هيكل بيانات من نوع؟', en: 'Tree is which type of data structure?' },
      options: ['Linear', 'Non-Linear', 'Primitive', 'Static'],
      correct: 1,
      explanation: { ar: 'Tree = Non-Linear (غير خطي)', en: 'Tree = Non-Linear' }
    },
    {
      question: { ar: 'الـ Root هو؟', en: 'The Root is?' },
      options: [
        { ar: 'آخر Node', en: 'Last Node' },
        { ar: 'أول Node (مالهاش Parent)', en: 'First Node (has no Parent)' },
        { ar: 'أي Node', en: 'Any Node' },
        { ar: 'الـ Node اللي مالهاش Children', en: 'Node with no Children' }
      ],
      correct: 1,
      explanation: { ar: 'Root = أول Node في الشجرة، مالهاش Parent', en: 'Root = first Node in tree, has no Parent' }
    },
    {
      question: { ar: 'الـ Leaf Node هي؟', en: 'A Leaf Node is?' },
      options: [
        { ar: 'Node مالهاش Parent', en: 'Node with no Parent' },
        { ar: 'Node مالهاش Children', en: 'Node with no Children' },
        { ar: 'Root Node', en: 'Root Node' },
        { ar: 'أي Node داخلية', en: 'Any internal Node' }
      ],
      correct: 1,
      explanation: { ar: 'Leaf = ورقة = Node مالهاش أطفال', en: 'Leaf = Node with no children' }
    },
    {
      question: { ar: 'Binary Tree كل Node فيها ليها كام Child كحد أقصى؟', en: 'Binary Tree each Node has at most how many children?' },
      options: ['1', '2', '3', { ar: 'غير محدود', en: 'Unlimited' }],
      correct: 1,
      explanation: { ar: 'Binary = 2 أطفال كحد أقصى (Left و Right)', en: 'Binary = at most 2 children (Left and Right)' }
    },
    {
      question: { ar: 'في BST، القيم الأصغر بتكون في أي اتجاه؟', en: 'In BST, smaller values are on which side?' },
      options: ['Right', 'Left', 'Both', 'Random'],
      correct: 1,
      explanation: { ar: 'في BST: أصغر من الـ Parent على الشمال', en: 'In BST: smaller than Parent goes Left' }
    },
    {
      question: { ar: 'في BST، القيم الأكبر بتكون في أي اتجاه؟', en: 'In BST, larger values are on which side?' },
      options: ['Left', 'Right', 'Both', 'Top'],
      correct: 1,
      explanation: { ar: 'في BST: أكبر من الـ Parent على اليمين', en: 'In BST: greater than Parent goes Right' }
    },
    {
      question: { ar: 'Inorder Traversal ترتيبه إيه؟', en: 'Inorder Traversal order is?' },
      options: ['NLR', 'LNR', 'LRN', 'NRL'],
      correct: 1,
      explanation: { ar: 'Inorder = LNR (Left, Node, Right)', en: 'Inorder = LNR (Left, Node, Right)' }
    },
    {
      question: { ar: 'Preorder Traversal ترتيبه إيه؟', en: 'Preorder Traversal order is?' },
      options: ['LNR', 'NLR', 'LRN', 'RNL'],
      correct: 1,
      explanation: { ar: 'Preorder = NLR (Node, Left, Right)', en: 'Preorder = NLR (Node, Left, Right)' }
    },
    {
      question: { ar: 'Postorder Traversal ترتيبه إيه؟', en: 'Postorder Traversal order is?' },
      options: ['NLR', 'LNR', 'LRN', 'RLN'],
      correct: 2,
      explanation: { ar: 'Postorder = LRN (Left, Right, Node)', en: 'Postorder = LRN (Left, Right, Node)' }
    },
    {
      question: { ar: 'Inorder على BST بيطلع القيم إزاي؟', en: 'Inorder on BST gives values in what order?' },
      options: [
        { ar: 'عشوائي', en: 'Random' },
        { ar: 'مرتبة تصاعدياً (Sorted Ascending)', en: 'Sorted Ascending' },
        { ar: 'مرتبة تنازلياً', en: 'Sorted Descending' },
        { ar: 'نفس ترتيب الإدخال', en: 'Same as insertion order' }
      ],
      correct: 1,
      explanation: { ar: 'Inorder على BST بيطلع القيم مرتبة تصاعدياً!', en: 'Inorder on BST gives values sorted in ascending order!' }
    },
    {
      question: { ar: 'الـ TC للبحث في BST في Average Case؟', en: 'TC of searching in BST on average?' },
      options: ['O(n)', 'O(1)', 'O(log n)', 'O(n²)'],
      correct: 2,
      explanation: { ar: 'البحث في BST = O(log n) في الحالة المتوسطة', en: 'BST search = O(log n) on average' }
    },
    {
      question: { ar: 'الـ Full Binary Tree كل Node فيها ليها؟', en: 'In Full Binary Tree, each Node has?' },
      options: [
        { ar: 'طفل واحد بس', en: 'Only one child' },
        { ar: 'يا إما 0 أو 2 أطفال', en: 'Either 0 or 2 children' },
        { ar: 'دايماً 2 أطفال', en: 'Always 2 children' },
        { ar: 'أي عدد', en: 'Any number' }
      ],
      correct: 1,
      explanation: { ar: 'Full Binary Tree: كل Node 0 أو 2 أطفال', en: 'Full Binary Tree: every Node has 0 or 2 children' }
    },
    {
      question: { ar: 'الـ Height بتاعت Node هي؟', en: 'The Height of a Node is?' },
      options: [
        { ar: 'عدد Edges من الـ Root ليها', en: 'Number of edges from Root to it' },
        { ar: 'أطول مسار منها لأقرب Leaf', en: 'Longest path from it to the nearest Leaf' },
        { ar: 'عدد الأطفال', en: 'Number of children' },
        { ar: 'قيمة الـ Data', en: 'Data value' }
      ],
      correct: 1,
      explanation: { ar: 'Height = أطول مسار من Node لـ Leaf', en: 'Height = longest path from Node to Leaf' }
    },
    {
      question: { ar: 'الـ Depth بتاعت Node هو؟', en: 'The Depth of a Node is?' },
      options: [
        { ar: 'أطول مسار للـ Leaf', en: 'Longest path to Leaf' },
        { ar: 'عدد Edges من الـ Root ليها', en: 'Number of edges from Root to it' },
        { ar: 'عدد الأطفال', en: 'Number of children' },
        { ar: 'رقم المستوى', en: 'Level number' }
      ],
      correct: 1,
      explanation: { ar: 'Depth = عدد الـ Edges من الـ Root', en: 'Depth = number of edges from Root' }
    },
    {
      question: { ar: 'لشجرة BST فيها: 50, 30, 70, 20, 40 - الـ Inorder Traversal؟', en: 'For BST with: 50, 30, 70, 20, 40 - Inorder Traversal?' },
      options: [
        '50, 30, 20, 40, 70',
        '20, 30, 40, 50, 70',
        '20, 40, 30, 70, 50',
        '50, 30, 70, 20, 40'
      ],
      correct: 1,
      explanation: { ar: 'Inorder (LNR) على BST = ترتيب تصاعدي: 20, 30, 40, 50, 70', en: 'Inorder (LNR) on BST = ascending: 20, 30, 40, 50, 70' }
    },
    {
      question: { ar: 'لنفس الشجرة: الـ Preorder Traversal؟', en: 'Same tree: Preorder Traversal?' },
      options: [
        '20, 30, 40, 50, 70',
        '50, 30, 20, 40, 70',
        '20, 40, 30, 70, 50',
        '50, 70, 30, 40, 20'
      ],
      correct: 1,
      explanation: { ar: 'Preorder (NLR): 50 → 30 → 20 → 40 → 70', en: 'Preorder (NLR): 50 → 30 → 20 → 40 → 70' }
    },
    {
      question: { ar: 'الـ TreeNode في C++ بتحتوي على؟', en: 'TreeNode in C++ contains?' },
      options: [
        'data, next',
        'data, left, right',
        'data, next, prev',
        'data, parent'
      ],
      correct: 1,
      explanation: { ar: 'TreeNode = data + left pointer + right pointer', en: 'TreeNode = data + left pointer + right pointer' }
    },
    {
      question: { ar: 'Postorder بيبدأ بأي Node؟', en: 'Postorder starts with which Node?' },
      options: [
        { ar: 'الـ Root', en: 'The Root' },
        { ar: 'أعمق Leaf على الشمال', en: 'Deepest Leaf on left' },
        { ar: 'أعمق Leaf على اليمين', en: 'Deepest Leaf on right' },
        { ar: 'أي Node', en: 'Any Node' }
      ],
      correct: 1,
      explanation: { ar: 'Postorder (LRN) بيبدأ بأعمق leaf على الشمال', en: 'Postorder (LRN) starts with deepest left leaf' }
    },
    {
      question: { ar: 'Preorder بيبدأ بأي Node؟', en: 'Preorder starts with which Node?' },
      options: ['Leaf', 'Root', 'Random', 'Middle'],
      correct: 1,
      explanation: { ar: 'Preorder (NLR) بيبدأ بالـ Root', en: 'Preorder (NLR) starts with Root' }
    },
    {
      question: { ar: 'الـ Subtree هي؟', en: 'A Subtree is?' },
      options: [
        { ar: 'الشجرة كلها', en: 'The entire tree' },
        { ar: 'أي Node مع كل الـ Descendants بتوعها', en: 'Any Node with all its descendants' },
        { ar: 'الـ Root بس', en: 'Just the Root' },
        { ar: 'الـ Leaves بس', en: 'Just the Leaves' }
      ],
      correct: 1,
      explanation: { ar: 'Subtree = Node + كل الأحفاد', en: 'Subtree = Node + all descendants' }
    }
  ],
  10: [
    {
      question: { ar: 'ما هو الرسم البياني (Graph)؟', en: 'What is a Graph?' },
      options: [
        { ar: 'هيكل بيانات خطي كالمصفوفات', en: 'A linear data structure like arrays' },
        { ar: 'هيكل بيانات غير خطي يتكون من Vertices و Edges', en: 'A non-linear data structure consisting of Vertices and Edges' },
        { ar: 'نوع من أنواع قواعد البيانات الهرمية', en: 'A type of hierarchical database' },
        { ar: 'دالة رياضية لحساب الوقت', en: 'A mathematical function to calculate time' }
      ],
      correct: 1,
      explanation: { ar: 'الرسم البياني هيكل غير خطي يتكون من عُقد (Vertices) وروابط بينها (Edges).', en: 'A graph is a non-linear data structure consisting of nodes (Vertices) and links (Edges).' }
    },
    {
      question: { ar: 'هل الأشجار (Trees) تعتبر حالة خاصة من الرسوم البيانية (Graphs)؟', en: 'Are trees considered special cases of graphs?' },
      options: [
        { ar: 'نعم، الأشجار هي رسوم بيانية متصلة وخالية من الدورات (Acyclic)', en: 'Yes, trees are connected acyclic graphs' },
        { ar: 'لا، ليس بينهما أي علاقة على الإطلاق', en: 'No, there is no relationship between them' },
        { ar: 'نعم، ولكن فقط إذا كانت مصفوفة التجاور فارغة', en: 'Yes, but only if the adjacency matrix is empty' },
        { ar: 'لا، الرسوم البيانية هي حالة خاصة من الأشجار', en: 'No, graphs are special cases of trees' }
      ],
      correct: 0,
      explanation: { ar: 'الشجرة هي في الأساس Graph متصل ولا يحتوي على أي دورات (Acyclic).', en: 'A tree is basically a connected graph that contains no cycles (Acyclic).' }
    },
    {
      question: { ar: 'أي مما يلي يعتبر مثالاً شهيراً على الرسم البياني غير الموجه (Undirected Graph)؟', en: 'Which of the following is a famous example of an Undirected Graph?' },
      options: [
        { ar: 'شبكة الصداقة في فيسبوك (Facebook friendships)', en: 'Facebook friendship network' },
        { ar: 'الروابط التشعبية بين مواقع الويب', en: 'Hyperlinks between websites' },
        { ar: 'شجرة الملفات في نظام التشغيل ويندوز', en: 'File tree in Windows OS' },
        { ar: 'طابور الطباعة في الشبكة المحلية', en: 'Print queue in a local network' }
      ],
      correct: 0,
      explanation: { ar: 'الصداقة في فيسبوك متبادلة (إذا كان A صديق B، فإن B صديق A)، مما يجعلها Undirected Graph.', en: 'Friendship on Facebook is mutual (if A is friends with B, B is friends with A), making it an undirected graph.' }
    },
    {
      question: { ar: 'ماذا يعني مصطلح الـ Degree لعقدة في رسم بياني غير موجه؟', en: 'What does the term Degree of a vertex mean in an undirected graph?' },
      options: [
        { ar: 'رقم المستوى الذي تقع فيه العقدة', en: 'The level number of the vertex' },
        { ar: 'عدد الأضلاع (Edges) المتصلة بتلك العقدة مباشرة', en: 'The number of edges directly incident to that vertex' },
        { ar: 'عدد العقد الكلي في الرسم البياني', en: 'The total number of vertices in the graph' },
        { ar: 'طول أقصر مسار يمر بالعقدة', en: 'The length of the shortest path passing through the vertex' }
      ],
      correct: 1,
      explanation: { ar: 'الدرجة (Degree) هي عدد الروابط أو الأضلاع التي تتصل مباشرة بالعقدة.', en: 'Degree is the number of relations/edges a node makes with other nodes.' }
    },
    {
      question: { ar: 'في الرسم الموجه (Directed Graph)، ما هو الـ In-degree للعقدة؟', en: 'In a Directed Graph, what is the In-degree of a vertex?' },
      options: [
        { ar: 'عدد الأضلاع الخارجة من العقدة', en: 'The number of edges going out of the vertex' },
        { ar: 'عدد الأضلاع الداخلة والمتجهة نحو العقدة', en: 'The number of edges coming into the vertex' },
        { ar: 'مجموع الأضلاع الداخلة والخارجة معاً', en: 'The sum of incoming and outgoing edges' },
        { ar: 'العلاقة بين العقدة والـ Root node', en: 'The relationship between the vertex and Root node' }
      ],
      correct: 1,
      explanation: { ar: 'الـ In-degree هو عدد الأسهم أو الأضلاع المتجهة نحو العقدة.', en: 'In-degree is the number of edges pointing to/coming to the vertex.' }
    },
    {
      question: { ar: 'العقدة المعزولة (Isolated Vertex) هي العقدة التي تكون درجتها (Degree) مساوية لـ؟', en: 'An Isolated Vertex is a vertex whose degree is equal to?' },
      options: ['1', '0', '-1', 'MAX_SIZE'],
      correct: 1,
      explanation: { ar: 'العقدة المعزولة هي العقدة التي لا تتصل بأي ضلع في الرسم (درجتها صفر).', en: 'An isolated vertex is a vertex with a degree of zero (no connections).' }
    },
    {
      question: { ar: 'ما هو الـ Loop في الرسم البياني؟', en: 'What is a Loop in a graph?' },
      options: [
        { ar: 'تكرار كود البحث في الرسم', en: 'Repeating the search code in the graph' },
        { ar: 'ضلع يربط العقدة بنفسها (Edge from vertex to itself)', en: 'An edge that connects a vertex to itself' },
        { ar: 'مسار دائري يمر بكل العقد', en: 'A circular path passing through all vertices' },
        { ar: 'تمثيل الرسم كقائمة متصلة', en: 'Representing a graph as a linked list' }
      ],
      correct: 1,
      explanation: { ar: 'العروة أو الـ Loop هي ضلع يبدأ وينتهي عند نفس العقدة.', en: 'In graph theory, a loop is an edge that connects a vertex to itself.' }
    },
    {
      question: { ar: 'إذا كان الرسم البياني يحتوي على n من العقد، فما هو حجم مصفوفة التجاور (Adjacency Matrix)؟', en: 'If a graph has n vertices, what is the size of its Adjacency Matrix?' },
      options: ['1 x n', 'n x n', 'n x (n-1)', 'n x 2'],
      correct: 1,
      explanation: { ar: 'مصفوفة التجاور هي مصفوفة مربعة حجمها n x n.', en: 'An adjacency matrix is represented as an n x n square matrix.' }
    },
    {
      question: { ar: 'في مصفوفة التجاور adj[n][n]، ماذا يعني أن تكون قيمة adj[i][j] == 1؟', en: 'In the adjacency matrix adj[n][n], what does adj[i][j] == 1 represent?' },
      options: [
        { ar: 'لا يوجد مسار أو ضلع بين العقدتين i و j', en: 'There is no edge or path between vertices i and j' },
        { ar: 'يوجد ضلع مباشر (Edge) يربط بين العقدتين i و j', en: 'There is a direct edge connecting vertex i to j' },
        { ar: 'العقدة i معزولة تماماً في الذاكرة', en: 'Vertex i is completely isolated in memory' },
        { ar: 'الرسم البياني بأكمله متصل ودائري', en: 'The entire graph is connected and cyclic' }
      ],
      correct: 1,
      explanation: { ar: 'القيمة 1 تعني وجود ضلع مباشر بين العقدتين، والقيمة 0 تعني عدم وجود ضلع.', en: '1 marks the existence of an edge between vertices, while 0 marks its absence.' }
    },
    {
      question: { ar: 'ماذا يعني أن يحتوي الرسم البياني على دورة (Cyclic Graph)؟', en: 'What does it mean for a graph to be cyclic?' },
      options: [
        { ar: 'أن تكون جميع العقد متصلة ببعضها بنفس الترتيب', en: 'All vertices are connected in the exact same order' },
        { ar: 'أن يحتوي الرسم على مسار مغلق واحد على الأقل يبدأ وينتهي عند نفس العقدة', en: 'The graph contains at least one path starting and ending at the same node' },
        { ar: 'أن يتم تمثيل الرسم البياني بمصفوفة ثنائية الأبعاد فقط', en: 'The graph is represented using only a 2D matrix' },
        { ar: 'أن تكون جميع العقد معزولة (Isolated)', en: 'All vertices are isolated from each other' }
      ],
      correct: 1,
      explanation: { ar: 'الرسم البياني الدائري يحتوي على دورة (Cycle)، وهي مسار مغلق يرجع لنفس نقطة البداية.', en: 'A cyclic graph contains at least one cycle (path that loops back to the start node).' }
    }
  ]
};