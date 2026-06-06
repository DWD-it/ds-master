/* ============================================================
   DS Master - Lecture Data (All 9 Lectures)
   Bilingual Content (Arabic + English) based on actual lectures
   ============================================================ */

const LECTURES = {
  // ──────────────────────────────────────────────────────────────
  // LECTURE 1: Introduction to Data Structures
  // ──────────────────────────────────────────────────────────────
  1: {
    id: 1,
    icon: '📚',
    title: {
      ar: 'مقدمة في هياكل البيانات',
      en: 'Introduction to Data Structures'
    },
    subtitle: {
      ar: 'تعريف هياكل البيانات وتصنيفاتها والعمليات الأساسية',
      en: 'Definition, Classifications, and Basic Operations'
    },
    topics: {
      ar: 'تعريف DS، التصنيفات، العمليات الأساسية، Linear vs Non-Linear',
      en: 'DS Definition, Classifications, Basic Operations, Linear vs Non-Linear'
    },
    sections: [
      {
        icon: '🎯',
        title: { ar: '1. أساسيات هياكل البيانات', en: '1. Data Structure Fundamentals' },
        content: {
          ar: `<p><strong>ما هي الـ <span class="term-en">Data Structure</span>؟</strong></p>
<p>هي طريقة لتنظيم وترتيب البيانات في الذاكرة (<span class="term-en">Memory</span>) عشان نقدر نستخدمها بكفاءة (<span class="term-en">Efficiently</span>).</p>
<p>بتأثر على التصميم الهيكلي والوظيفي للبرنامج.</p>
<p><strong>مفاهيم هامة:</strong></p>
<p>• <span class="term-en">Implementation</span>: البرنامج اللي بيبني أو بيُنفذ الـ Data Structure نفسها.</p>
<p>• <span class="term-en">Client Program</span>: البرنامج اللي بيستخدم الـ Data Structure الجاهزة.</p>
<p>• <span class="term-en">Algorithm</span>: خطوات متسلسلة لحل مشكلة أو أداء وظيفة معينة.</p>`,
          en: `<p><strong>What is a <span class="term-en">Data Structure</span>?</strong></p>
<p>It is the <span class="term-important">organization</span> of data in a way that it can be used <span class="term-en">efficiently</span>.</p>
<p>It affects both the structural and functional design of a program.</p>
<p><strong>Key Concepts:</strong></p>
<p>• <span class="term-en">Implementation</span>: The program that builds or implements the data structure itself.</p>
<p>• <span class="term-en">Client Program</span>: The program that uses a ready-made data structure.</p>
<p>• <span class="term-en">Algorithm</span>: A step-by-step procedure to solve a particular function.</p>`
        },
        tip: {
          ar: 'الزتونة: المعادلة الذهبية للبرمجة هي: Program = Algorithm + Data Structure',
          en: 'Key Point: The golden equation of programming: Program = Algorithm + Data Structure'
        },
        formula: 'Program = Algorithm + Data Structure',
      },
      {
        icon: '⚙️',
        title: { ar: '2. العمليات الأساسية على البيانات', en: '2. Basic Operations on Data' },
        content: {
          ar: `<p>في أربع عمليات أساسية نقدر نعملها على أي Data Structure:</p>
<p>• <span class="term-en">Storing</span>: تخزين البيانات.</p>
<p>• <span class="term-en">Insertion</span>: إضافة عنصر جديد.</p>
<p>• <span class="term-en">Deletion</span>: مسح عنصر.</p>
<p>• <span class="term-en">Searching</span>: البحث عن عنصر معين.</p>`,
          en: `<p>There are four basic operations we can perform on any Data Structure:</p>
<p>• <span class="term-important">Storing</span>: Storing data in the structure.</p>
<p>• <span class="term-important">Insertion</span>: Adding a new element.</p>
<p>• <span class="term-important">Deletion</span>: Removing an element.</p>
<p>• <span class="term-important">Searching</span>: Finding a specific element.</p>`
        }
      },
      {
        icon: '🗂️',
        title: { ar: '3. تصنيف هياكل البيانات', en: '3. Classification of Data Structures' },
        content: {
          ar: `<p>هياكل البيانات بتتقسم لنوعين رئيسيين:</p>
<p><strong>1. <span class="term-important">Primitive</span> (أساسية):</strong> Integer, Float, Character, Pointer</p>
<p><strong>2. <span class="term-important">Non-Primitive</span> (غير أساسية):</strong></p>
<p>&nbsp;&nbsp;• <strong><span class="term-en">Linear</span> (خطية):</strong> Array, Linked List, Stack, Queue</p>
<p>&nbsp;&nbsp;• <strong><span class="term-en">Non-Linear</span> (غير خطية):</strong> Trees, Graphs</p>`,
          en: `<p>Data Structures are classified into two main types:</p>
<p><strong>1. <span class="term-important">Primitive</span>:</strong> Integer, Float, Character, Pointer</p>
<p><strong>2. <span class="term-important">Non-Primitive</span>:</strong></p>
<p>&nbsp;&nbsp;• <strong><span class="term-important">Linear</span>:</strong> Array, Linked List, Stack, Queue</p>
<p>&nbsp;&nbsp;• <strong><span class="term-important">Non-Linear</span>:</strong> Trees, Graphs</p>`
        },
        classificationTree: {
          title: { ar: 'شجرة تصنيف هياكل البيانات', en: 'Data Structure Classification Tree' },
          nodes: [
            {
              icon: '📂',
              label: { ar: 'Data Structure', en: 'Data Structure' },
              children: [
                {
                  icon: '📁',
                  label: { ar: 'Primitive (أساسية)', en: 'Primitive' },
                  items: ['Integer', 'Float', 'Character', 'Pointer']
                },
                {
                  icon: '📁',
                  label: { ar: 'Non-Primitive (غير أساسية)', en: 'Non-Primitive' },
                  children: [
                    {
                      icon: '➖',
                      label: { ar: 'Linear (خطية)', en: 'Linear' },
                      items: ['Array', 'Linked List', 'Stack', 'Queue']
                    },
                    {
                      icon: '🌿',
                      label: { ar: 'Non-Linear (غير خطية)', en: 'Non-Linear' },
                      items: ['Trees', 'Graphs']
                    }
                  ]
                }
              ]
            }
          ]
        }
      },
      {
        icon: '📊',
        title: { ar: '4. هياكل البيانات الخطية', en: '4. Linear Data Structures' },
        content: {
          ar: `<p><strong>تعريفها:</strong> العناصر بتترتب بشكل خطي أو متسلسل (<span class="term-en">Sequential order</span>). كل عنصر ليه <span class="term-important">سابق (Predecessor)</span> و<span class="term-important">لاحق (Successor)</span> واحد فقط، ما عدا العنصر الأول والأخير.</p>`,
          en: `<p><strong>Definition:</strong> Elements are arranged in a <span class="term-important">sequential order</span>. Each element has exactly one <span class="term-important">predecessor</span> and one <span class="term-important">successor</span>, except for the first and last elements.</p>`
        },
        visualization: {
          type: 'array',
          title: '1. Array (المصفوفة)',
          desc: 'عناصر متجاورة في الذاكرة بنوصلها بالـ Index',
          data: [5, 10, 3, 7, 1],
          id: 'array1'
        }
      },
      {
        icon: '📦',
        title: { ar: '5. أمثلة الهياكل الخطية', en: '5. Linear DS Examples' },
        content: {
          ar: `<p><strong>Stack (المكدس):</strong> زي رصة الأطباق، اللي بيدخل الأخير بيخرج الأول <span class="term-important">(LIFO - Last In First Out)</span></p>
<p><strong>Queue (الطابور):</strong> زي طابور العيش، اللي بيدخل الأول بيخرج الأول <span class="term-important">(FIFO - First In First Out)</span></p>
<p><strong>Linked List (القائمة المتصلة):</strong> كل عنصر (Node) شايل الداتا وشايل عنوان العنصر اللي بعده</p>`,
          en: `<p><strong>Stack:</strong> Like a stack of plates, the last one in is the first one out <span class="term-important">(LIFO - Last In First Out)</span></p>
<p><strong>Queue:</strong> Like a queue at a store, the first one in is the first one out <span class="term-important">(FIFO - First In First Out)</span></p>
<p><strong>Linked List:</strong> Each element (Node) holds data and the address of the next element</p>`
        },
        visualization: {
          type: 'linked-list',
          title: 'Linked List (القائمة المتصلة)',
          desc: 'كل Node شايل Data + عنوان الـ Node اللي بعده',
          data: [1, 2, 3],
          id: 'll1'
        }
      },
      {
        icon: '🌳',
        title: { ar: '6. هياكل البيانات غير الخطية', en: '6. Non-Linear Data Structures' },
        content: {
          ar: `<p><strong>تعريفها:</strong> العناصر <span class="term-important">غير مرتبة</span> بشكل متسلسل، يعني مفيش ترتيب خطي واضح.</p>
<p><strong>أمثلتها:</strong></p>
<p>1- <strong><span class="term-en">Trees</span> (الأشجار):</strong> بتستخدم في العلاقات الهرمية (زي الـ Folders في الويندوز).</p>
<p>2- <strong><span class="term-en">Graphs</span> (الرسوم البيانية):</strong> زي شبكات الطرق أو شبكات التواصل الاجتماعي.</p>`,
          en: `<p><strong>Definition:</strong> Elements are <span class="term-important">not arranged</span> in a sequential manner, meaning there is no clear linear order.</p>
<p><strong>Examples:</strong></p>
<p>1- <strong><span class="term-en">Trees</span>:</strong> Used for hierarchical relationships (like folders in Windows).</p>
<p>2- <strong><span class="term-en">Graphs</span>:</strong> Like road networks or social media networks.</p>`
        }
      },
      {
        icon: '⏱️',
        title: { ar: '7. الكفاءة وتعقيد الوقت', en: '7. Efficiency & Time Complexity' },
        content: {
          ar: `<p>كفاءة أي Data Structure بتتقاس بحاجتين: <span class="term-important">الوقت (Time)</span> و<span class="term-important">المساحة في الذاكرة (Space)</span>.</p>
<p>أفضل DS هي اللي بتاخد أقل وقت للعمليات وأقل مساحة في الميموري.</p>
<p><strong>حالات الـ Time Complexity:</strong></p>
<p>• <span class="term-important">Best Case (Ω - Omega)</span>: أفضل حالة، تلاقي الرقم في أول عنصر (Fast Time).</p>
<p>• <span class="term-important">Average Case (Θ - Theta)</span>: الحالة المتوسطة، تلاقيه في النص تقريباً.</p>
<p>• <span class="term-important">Worst Case (O - Big O)</span>: أسوأ حالة، تدور في العناصر كلها. ودي اللي دايماً بنركز عليها.</p>`,
          en: `<p>The efficiency of any Data Structure is measured by two factors: <span class="term-important">Time</span> and <span class="term-important">Space (Memory)</span>.</p>
<p>The best DS is the one that takes the least time for operations and the least memory space.</p>
<p><strong>Time Complexity Cases:</strong></p>
<p>• <span class="term-important">Best Case (Ω - Omega)</span>: Finding the element at the first position.</p>
<p>• <span class="term-important">Average Case (Θ - Theta)</span>: Finding the element roughly in the middle.</p>
<p>• <span class="term-important">Worst Case (O - Big O)</span>: Searching through all elements. This is what we always focus on.</p>`
        },
        tip: {
          ar: 'الزتونة: في الامتحان، لو سألوك عن الكفاءة، دايماً احسب الـ Worst Case (Big O) - ده الأهم!',
          en: 'Key Point: In exams, when asked about efficiency, always calculate the Worst Case (Big O) - it\'s the most important!'
        }
      },
      {
        icon: '📝',
        title: { ar: '8. إجابات أسئلة الشيت الأول', en: '8. Sheet 1 Answers' },
        content: {
          ar: `<p><strong>Q1: أكمل الفراغات:</strong></p>
<p>1. A data structure is the <span class="term-important">organization</span> of the data in a way that it can be used efficiently.</p>
<p>2. Data structure affects the design of both structural & functional aspects of a program.</p>
<p>3. The program which implements the data structure is known as the <span class="term-important">implementation</span>.</p>
<p>4. The program that uses data structure is called a <span class="term-important">client program</span>.</p>
<p>5. Program = <span class="term-important">Algorithm</span> + <span class="term-important">Data Structure</span>.</p>
<p>6. <span class="term-important">Algorithm</span> is a step by step procedure to solve a particular function.</p>
<p><strong>Q2: الفرق بين DS والـ Database:</strong></p>
<p>الـ Data Structure بتُستخدم لتخزين البيانات في الـ <span class="term-important">Main Memory (RAM)</span> أثناء تشغيل البرنامج (مؤقتة)، لكن الـ Database بتُستخدم لتخزين البيانات في الـ <span class="term-important">Secondary Storage (Hard Disk)</span> بشكل دائم.</p>`,
          en: `<p><strong>Q1: Complete the blanks:</strong></p>
<p>1. A data structure is the <span class="term-important">organization</span> of the data in a way that it can be used efficiently.</p>
<p>2. Data structure affects the design of both structural & functional aspects of a program.</p>
<p>3. The program which implements the data structure is known as the <span class="term-important">implementation</span>.</p>
<p>4. The program that uses data structure is called a <span class="term-important">client program</span>.</p>
<p>5. Program = <span class="term-important">Algorithm</span> + <span class="term-important">Data Structure</span>.</p>
<p>6. <span class="term-important">Algorithm</span> is a step by step procedure to solve a particular function.</p>
<p><strong>Q2: Difference between DS and Database:</strong></p>
<p>Data Structure stores data in <span class="term-important">Main Memory (RAM)</span> temporarily during program execution, while Database stores data in <span class="term-important">Secondary Storage (Hard Disk)</span> permanently.</p>`
        }
      }
    ]
  },

  // ──────────────────────────────────────────────────────────────
  // LECTURE 2: Time Complexity & Big O
  // ──────────────────────────────────────────────────────────────
  2: {
    id: 2,
    icon: '⏱️',
    title: {
      ar: 'تعقيد الوقت و Big O Notation',
      en: 'Time Complexity & Big O Notation'
    },
    subtitle: {
      ar: 'قياس كفاءة الخوارزميات وحساب الوقت',
      en: 'Measuring Algorithm Efficiency'
    },
    topics: {
      ar: 'Big O، الثوابت، اللوبات، اللوغاريتمات، الترتيب',
      en: 'Big O, Constants, Loops, Logarithms, Ordering'
    },
    sections: [
      {
        icon: '🧠',
        title: { ar: '1. يعني إيه Time Complexity؟', en: '1. What is Time Complexity?' },
        content: {
          ar: `<p>لما بنكتب كود، مش بنقيس سرعته بالثواني (لأن كمبيوترك غير كمبيوتر زميلك). إحنا بنقيس السرعة بناءً على <strong>حجم البيانات (<span class="term-en">n</span>)</strong>.</p>
<p>عشان نعبر عن ده، بنستخدم <span class="term-important">Big O Notation (O الكبيرة)</span>. دي بتعبر عن <span class="term-important">أسوأ سيناريو (Worst Case)</span> ممكن الكود يمر بيه.</p>`,
          en: `<p>When writing code, we don't measure speed in seconds (because your computer differs from your friend's). We measure speed based on <strong>input size (<span class="term-en">n</span>)</strong>.</p>
<p>To express this, we use <span class="term-important">Big O Notation</span>. It represents the <span class="term-important">Worst Case scenario</span> the code can encounter.</p>`
        },
        tip: {
          ar: 'القاعدة الذهبية: دايماً بنهمل الأرقام الثابتة (Constants) وبناخد أعلى أُس. يعني لو كود وقته 1 + n + n² بنقول عليه O(n²)',
          en: 'Golden Rule: Always ignore constants and take the highest power. If code time is 1 + n + n², we say O(n²)'
        }
      },
      {
        icon: '1️⃣',
        title: { ar: '2. العمليات الثابتة - O(1)', en: '2. Constant Time - O(1)' },
        content: {
          ar: `<p>أي عملية حسابية بسيطة (+, -, *, /) أو تعريف متغير (<code>int x = 5</code>) أو عملية مقارنة (<code>if x > 5</code>) بتاخد وقت ثابت <span class="term-important">O(1)</span>.</p>
<p>حتى لو عندك 100 سطر تعريف متغيرات، برضه هيتلموا في الآخر ويكونوا O(1) لإننا بنهمل الثوابت.</p>`,
          en: `<p>Any simple operation (+, -, *, /), variable declaration (<code>int x = 5</code>), or comparison (<code>if x > 5</code>) takes constant time <span class="term-important">O(1)</span>.</p>
<p>Even 100 lines of variable declarations still sum to O(1) because we ignore constants.</p>`
        },
        code: `<span class="hl-type">int</span> x = <span class="hl-number">1</span>;      <span class="hl-comment">// 1 unit of time</span>
<span class="hl-type">int</span> y = <span class="hl-number">2</span>;      <span class="hl-comment">// 1 unit of time</span>
<span class="hl-type">int</span> z = x + y;  <span class="hl-comment">// 1 unit of time</span>
cout &lt;&lt; z;      <span class="hl-comment">// 1 unit of time</span>
<span class="hl-comment">// Total = 4 units -> O(1)</span>`,
        complexity: 'O(1) - Constant Time'
      },
      {
        icon: '🔀',
        title: { ar: '3. الجمل الشرطية (If-Else)', en: '3. Conditional Statements (If-Else)' },
        content: {
          ar: `<p>الكمبيوتر هيدخل يا إما في الـ if يا إما في الـ else (مستحيل يدخل الاتنين).</p>
<p>بما إننا بنحسب الـ <span class="term-important">Worst Case</span>، بناخد الوقت بتاع البلوك الأطول فيهم.</p>`,
          en: `<p>The computer enters either the if block or the else block (never both).</p>
<p>Since we calculate the <span class="term-important">Worst Case</span>, we take the time of the longer block.</p>`
        },
        code: `<span class="hl-keyword">if</span> (n == <span class="hl-number">0</span>) {
    <span class="hl-comment">// statement takes O(1)</span>
} <span class="hl-keyword">else</span> {
    <span class="hl-keyword">for</span> (<span class="hl-type">int</span> j = <span class="hl-number">1</span>; j &lt;= n; j++) {
        <span class="hl-comment">// statement executes n times -> O(n)</span>
    }
}`,
        complexity: 'O(n) - الـ else هو الأطول'
      },
      {
        icon: '🔄',
        title: { ar: '4. اللوب العادية (Loops) - O(n)', en: '4. Simple Loops - O(n)' },
        content: {
          ar: `<p>اللوب اللي بتزيد بمقدار ثابت (زي <code>i++</code> أو <code>i+=2</code>) بتنفذ الكود اللي جواها <span class="term-en">n</span> من المرات.</p>
<p>الوقت بيساوي: عدد لفات اللوب × وقت الكود اللي جواها.</p>`,
          en: `<p>A loop that increments by a constant (like <code>i++</code> or <code>i+=2</code>) executes the inner code <span class="term-en">n</span> times.</p>
<p>Time = number of iterations × time of inner code.</p>`
        },
        code: `<span class="hl-type">int</span> sum = <span class="hl-number">0</span>;
<span class="hl-keyword">for</span> (<span class="hl-type">int</span> i = <span class="hl-number">1</span>; i &lt;= n; i++) {
    sum = sum + i; <span class="hl-comment">// Takes O(1)</span>
}`,
        complexity: 'O(n) - اللوب n مرة × O(1) = O(n)'
      },
      {
        icon: '🔄🔄',
        title: { ar: '5. اللوب المتداخلة (Nested Loops) - O(n²)', en: '5. Nested Loops - O(n²)' },
        content: {
          ar: `<p>هنا بنضرب عدد لفات اللوب الخارجية في عدد لفات اللوب الداخلية. <span class="term-important">(n × n = n²)</span></p>`,
          en: `<p>Here we multiply outer loop iterations by inner loop iterations. <span class="term-important">(n × n = n²)</span></p>`
        },
        code: `<span class="hl-keyword">for</span> (<span class="hl-type">int</span> i = <span class="hl-number">1</span>; i &lt;= n; i++) {
    <span class="hl-keyword">for</span> (<span class="hl-type">int</span> j = <span class="hl-number">1</span>; j &lt;= n; j++) {
        <span class="hl-comment">// statement takes O(1)</span>
    }
}`,
        complexity: 'O(n²) - O(n) × O(n) = O(n²)'
      },
      {
        icon: '📐',
        title: { ar: '6. اللوغاريتمات - O(log n)', en: '6. Logarithmic Time - O(log n)' },
        content: {
          ar: `<p><span class="term-important">ركز هنا يا مهندس:</span> اللوب اللي فيها العداد <strong>بينضرب</strong> أو <strong>بيتقسم</strong> (زي <code>i = i * 2</code> أو <code>i = i / 2</code>) دي مابتلفش n مرة، دي بتلف <span class="term-important">Log n</span> مرة!</p>
<p>مثال: لو الـ n = 8 وبنضرب في 2:<br>الـ i هتكون: 1 → 2 → 4 → 8 = <strong>3 مرات بس!</strong></p>
<p>في الرياضة: 2 أُس كام يساوي 8؟ الإجابة 3 = log₂(8)</p>
<p>لو بنضرب في 3 (<code>i = i * 3</code>)، يبقى الـ Time Complexity هو <span class="term-important">O(log₃ n)</span>.</p>`,
          en: `<p><span class="term-important">Pay attention:</span> A loop where the counter is <strong>multiplied</strong> or <strong>divided</strong> (like <code>i = i * 2</code> or <code>i = i / 2</code>) doesn't loop n times, it loops <span class="term-important">Log n</span> times!</p>
<p>Example: If n = 8 and we multiply by 2:<br>i will be: 1 → 2 → 4 → 8 = <strong>only 3 times!</strong></p>
<p>In math: 2 to what power = 8? Answer: 3 = log₂(8)</p>
<p>If multiplying by 3 (<code>i = i * 3</code>), the Time Complexity is <span class="term-important">O(log₃ n)</span>.</p>`
        },
        code: `<span class="hl-keyword">for</span> (<span class="hl-type">int</span> i = <span class="hl-number">1</span>; i &lt;= n; i = i * <span class="hl-number">2</span>) {
    cout &lt;&lt; i;
}`,
        complexity: 'O(log n) - بنضرب في 2 كل مرة'
      },
      {
        icon: '🔥',
        title: { ar: '7. دمج أنواع اللوبات - O(n log n)', en: '7. Combined Loop Types - O(n log n)' },
        content: {
          ar: `<p>لو عندك لوب خارجية بتزيد بالجمع (n)، وجواها لوب داخلية بتزيد بالضرب أو القسمة (log n):</p>`,
          en: `<p>If you have an outer loop incrementing by addition (n), and inside it an inner loop incrementing by multiplication/division (log n):</p>`
        },
        code: `<span class="hl-keyword">for</span> (<span class="hl-type">int</span> i = <span class="hl-number">0</span>; i &lt; n; i++) {             <span class="hl-comment">// O(n)</span>
    <span class="hl-keyword">for</span> (<span class="hl-type">int</span> j = <span class="hl-number">1</span>; j &lt; n; j = j * <span class="hl-number">3</span>) { <span class="hl-comment">// O(log₃ n)</span>
        cout &lt;&lt; i + j;
    }
}`,
        complexity: 'O(n × log₃ n)'
      },
      {
        icon: '👹',
        title: { ar: '8. مثال الوحش: ثلاث لوبات متداخلة!', en: '8. Monster Example: Triple Nested Loops!' },
        content: {
          ar: `<p>المثال الصعب من آخر صفحة في الشيت التاني:</p>
<p><strong>اللوب الأولى:</strong> بتبدأ من n/2 لحد n وتمشي i++. يعني هتمشي نص مشوار الـ n = <span class="term-important">O(n)</span> (بنطير الثوابت)</p>
<p><strong>اللوب التانية:</strong> k = k * 2 → <span class="term-important">O(log₂ n)</span></p>
<p><strong>اللوب التالتة:</strong> j = 2 * j → <span class="term-important">O(log₂ n)</span></p>
<p>بما إنهم جوة بعض، بنضرب: n × (log n) × (log n)</p>`,
          en: `<p>The hard example from the last page of Sheet 2:</p>
<p><strong>Loop 1:</strong> Starts from n/2 to n with i++. Goes through half of n = <span class="term-important">O(n)</span> (drop constants)</p>
<p><strong>Loop 2:</strong> k = k * 2 → <span class="term-important">O(log₂ n)</span></p>
<p><strong>Loop 3:</strong> j = 2 * j → <span class="term-important">O(log₂ n)</span></p>
<p>Since they're nested, multiply: n × (log n) × (log n)</p>`
        },
        code: `<span class="hl-keyword">for</span> (<span class="hl-type">int</span> i = n/<span class="hl-number">2</span>; i &lt; n; i++) {              <span class="hl-comment">// Loop 1: O(n)</span>
    <span class="hl-keyword">for</span> (<span class="hl-type">int</span> k = <span class="hl-number">1</span>; k &lt; n; k = k * <span class="hl-number">2</span>) {      <span class="hl-comment">// Loop 2: O(log n)</span>
        <span class="hl-keyword">for</span> (<span class="hl-type">int</span> j = <span class="hl-number">1</span>; j &lt; n; j = <span class="hl-number">2</span> * j) {  <span class="hl-comment">// Loop 3: O(log n)</span>
            cout &lt;&lt; i + j + k;
        }
    }
}`,
        complexity: 'O(n × (log n)²)'
      },
      {
        icon: '📈',
        title: { ar: '9. ترتيب الكفاءة', en: '9. Efficiency Order' },
        content: {
          ar: `<p>ترتيب الـ Time Complexity من الأسرع (الأفضل) للأبطأ (الأسوأ):</p>
<p>1. <span class="term-important">O(1)</span> → Constant (أسرع حاجة)</p>
<p>2. <span class="term-important">O(log n)</span> → Logarithmic (سريع جداً)</p>
<p>3. <span class="term-important">O(n)</span> → Linear (عادي، لوب بسيطة)</p>
<p>4. <span class="term-important">O(n log n)</span> → (خوارزميات الترتيب السريعة)</p>
<p>5. <span class="term-important">O(n²)</span> → Quadratic (بطيء، Nested loops)</p>
<p>6. <span class="term-important">O(2ⁿ)</span> → Exponential (أسوأ حاجة!)</p>`,
          en: `<p>Time Complexity order from fastest (best) to slowest (worst):</p>
<p>1. <span class="term-important">O(1)</span> → Constant (fastest)</p>
<p>2. <span class="term-important">O(log n)</span> → Logarithmic (very fast)</p>
<p>3. <span class="term-important">O(n)</span> → Linear (normal, simple loop)</p>
<p>4. <span class="term-important">O(n log n)</span> → (fast sorting algorithms)</p>
<p>5. <span class="term-important">O(n²)</span> → Quadratic (slow, nested loops)</p>
<p>6. <span class="term-important">O(2ⁿ)</span> → Exponential (worst possible!)</p>`
        }
      }
    ]
  },

  // ──────────────────────────────────────────────────────────────
  // LECTURE 3: Stack
  // ──────────────────────────────────────────────────────────────
  3: {
    id: 3,
    icon: '📦',
    title: { ar: 'الـ Stack (المكدّس)', en: 'Stack Data Structure' },
    subtitle: { ar: 'مفهوم LIFO وعمليات Push و Pop', en: 'LIFO Concept, Push and Pop Operations' },
    topics: { ar: 'LIFO, Push, Pop, Peek, isEmpty, isFull, Array Implementation', en: 'LIFO, Push, Pop, Peek, isEmpty, isFull, Array Implementation' },
    sections: [
      {
        icon: '📦',
        title: { ar: '1. ما هو الـ Stack؟', en: '1. What is a Stack?' },
        content: {
          ar: `<p>الـ Stack هو <span class="term-important">هيكل بيانات خطي (Linear)</span> بيتبع مبدأ <span class="term-important">LIFO - Last In First Out</span> (اللي دخل الأخير يخرج الأول).</p>
<p>زي رصة الأطباق: آخر طبق حطيته فوق هو أول طبق هتشيله.</p>
<p>الـ Stack ليه <span class="term-important">طرف واحد بس</span> للإدخال والإخراج اسمه <span class="term-important">Top</span>.</p>`,
          en: `<p>A Stack is a <span class="term-important">linear data structure</span> that follows the <span class="term-important">LIFO - Last In First Out</span> principle.</p>
<p>Like a stack of plates: the last plate placed on top is the first one removed.</p>
<p>A Stack has <span class="term-important">only one end</span> for insertion and removal called the <span class="term-important">Top</span>.</p>`
        },
        visualization: {
          type: 'stack',
          title: 'Stack Visualization',
          desc: 'LIFO - Last In First Out',
          data: ['A1', 'A2', 'A3'],
          id: 'stack1'
        }
      },
      {
        icon: '⚙️',
        title: { ar: '2. عمليات الـ Stack', en: '2. Stack Operations' },
        content: {
          ar: `<p><strong>العمليات الأساسية:</strong></p>
<p>1. <span class="term-important">Push(x)</span>: إضافة عنصر x في أعلى الـ Stack (فوق الـ Top).</p>
<p>2. <span class="term-important">Pop()</span>: حذف العنصر اللي فوق (الـ Top) وإرجاع قيمته.</p>
<p>3. <span class="term-important">Peek() / Top()</span>: قراءة قيمة العنصر اللي فوق بدون حذفه.</p>
<p>4. <span class="term-important">isEmpty()</span>: التحقق هل الـ Stack فاضي ولا لأ.</p>
<p>5. <span class="term-important">isFull()</span>: التحقق هل الـ Stack ممتلئ (في حالة الـ Array Implementation).</p>
<p><strong>مهم:</strong> لو عملت <span class="term-important">Push</span> على Stack ممتلئ = <span class="term-important">Stack Overflow</span></p>
<p>لو عملت <span class="term-important">Pop</span> من Stack فاضي = <span class="term-important">Stack Underflow</span></p>`,
          en: `<p><strong>Basic Operations:</strong></p>
<p>1. <span class="term-important">Push(x)</span>: Add element x on top of the Stack.</p>
<p>2. <span class="term-important">Pop()</span>: Remove the top element and return its value.</p>
<p>3. <span class="term-important">Peek() / Top()</span>: Read the top element without removing it.</p>
<p>4. <span class="term-important">isEmpty()</span>: Check if the Stack is empty.</p>
<p>5. <span class="term-important">isFull()</span>: Check if the Stack is full (for Array Implementation).</p>
<p><strong>Important:</strong> Pushing to a full Stack = <span class="term-important">Stack Overflow</span></p>
<p>Popping from an empty Stack = <span class="term-important">Stack Underflow</span></p>`
        }
      },
      {
        icon: '💻',
        title: { ar: '3. تنفيذ الـ Stack باستخدام Array', en: '3. Stack Implementation using Array' },
        content: {
          ar: `<p>بنستخدم Array ومتغير <span class="term-en">top</span> يبدأ من <code>-1</code> (معناها الـ Stack فاضي).</p>`,
          en: `<p>We use an Array and a variable <span class="term-en">top</span> starting at <code>-1</code> (meaning the Stack is empty).</p>`
        },
        code: `<span class="hl-keyword">#define</span> MAX_SIZE <span class="hl-number">100</span>

<span class="hl-keyword">class</span> <span class="hl-class">Stack</span> {
<span class="hl-keyword">private</span>:
    <span class="hl-type">int</span> arr[MAX_SIZE];
    <span class="hl-type">int</span> top;
<span class="hl-keyword">public</span>:
    Stack() { top = <span class="hl-number">-1</span>; }

    <span class="hl-type">void</span> <span class="hl-function">push</span>(<span class="hl-type">int</span> x) {
        <span class="hl-keyword">if</span> (top == MAX_SIZE - <span class="hl-number">1</span>) {
            cout &lt;&lt; <span class="hl-string">"Stack Overflow!"</span>;
            <span class="hl-keyword">return</span>;
        }
        arr[++top] = x;
    }

    <span class="hl-type">int</span> <span class="hl-function">pop</span>() {
        <span class="hl-keyword">if</span> (top == <span class="hl-number">-1</span>) {
            cout &lt;&lt; <span class="hl-string">"Stack Underflow!"</span>;
            <span class="hl-keyword">return</span> <span class="hl-number">-1</span>;
        }
        <span class="hl-keyword">return</span> arr[top--];
    }

    <span class="hl-type">int</span> <span class="hl-function">peek</span>() {
        <span class="hl-keyword">if</span> (top == <span class="hl-number">-1</span>) <span class="hl-keyword">return</span> <span class="hl-number">-1</span>;
        <span class="hl-keyword">return</span> arr[top];
    }

    <span class="hl-type">bool</span> <span class="hl-function">isEmpty</span>() { <span class="hl-keyword">return</span> top == <span class="hl-number">-1</span>; }
    <span class="hl-type">bool</span> <span class="hl-function">isFull</span>()  { <span class="hl-keyword">return</span> top == MAX_SIZE - <span class="hl-number">1</span>; }
};`,
        codeTitle: 'Stack Class - Array Implementation'
      },
      {
        icon: '⏱️',
        title: { ar: '4. Time Complexity للـ Stack', en: '4. Stack Time Complexity' },
        content: {
          ar: `<p>كل عمليات الـ Stack بتاخد <span class="term-important">O(1)</span> - وقت ثابت:</p>
<p>• Push: <span class="term-important">O(1)</span></p>
<p>• Pop: <span class="term-important">O(1)</span></p>
<p>• Peek: <span class="term-important">O(1)</span></p>
<p>• isEmpty / isFull: <span class="term-important">O(1)</span></p>`,
          en: `<p>All Stack operations take <span class="term-important">O(1)</span> - constant time:</p>
<p>• Push: <span class="term-important">O(1)</span></p>
<p>• Pop: <span class="term-important">O(1)</span></p>
<p>• Peek: <span class="term-important">O(1)</span></p>
<p>• isEmpty / isFull: <span class="term-important">O(1)</span></p>`
        }
      }
    ]
  },

  // ──────────────────────────────────────────────────────────────
  // LECTURE 4: Stack Applications (Infix/Postfix/Prefix)
  // ──────────────────────────────────────────────────────────────
  4: {
    id: 4,
    icon: '🔢',
    title: { ar: 'تطبيقات الـ Stack', en: 'Stack Applications' },
    subtitle: { ar: 'تحويل التعبيرات: Infix, Postfix, Prefix', en: 'Expression Conversion: Infix, Postfix, Prefix' },
    topics: { ar: 'Infix, Postfix, Prefix, التحويل بينهم, Evaluation', en: 'Infix, Postfix, Prefix, Conversion, Evaluation' },
    sections: [
      {
        icon: '📐',
        title: { ar: '1. أنواع التعبيرات الرياضية', en: '1. Types of Mathematical Expressions' },
        content: {
          ar: `<p>في ثلاث طرق لكتابة التعبيرات الرياضية:</p>
<p>1. <span class="term-important">Infix</span>: العامل بين المعاملين → <code>A + B</code> (الطريقة العادية اللي بنكتبها)</p>
<p>2. <span class="term-important">Postfix (Reverse Polish)</span>: العامل بعد المعاملين → <code>A B +</code></p>
<p>3. <span class="term-important">Prefix (Polish)</span>: العامل قبل المعاملين → <code>+ A B</code></p>`,
          en: `<p>There are three ways to write mathematical expressions:</p>
<p>1. <span class="term-important">Infix</span>: Operator between operands → <code>A + B</code> (normal way we write)</p>
<p>2. <span class="term-important">Postfix (Reverse Polish)</span>: Operator after operands → <code>A B +</code></p>
<p>3. <span class="term-important">Prefix (Polish)</span>: Operator before operands → <code>+ A B</code></p>`
        },
        tip: {
          ar: 'الزتونة: الكمبيوتر بيحب الـ Postfix لأنه مش محتاج أقواس ولا أولويات - بيتنفذ من الشمال لليمين بالترتيب!',
          en: 'Key Point: Computers prefer Postfix because it doesn\'t need parentheses or priorities - it evaluates left to right in order!'
        }
      },
      {
        icon: '🔄',
        title: { ar: '2. أولويات العمليات (Precedence)', en: '2. Operator Precedence' },
        content: {
          ar: `<p>ترتيب الأولويات من الأعلى للأقل:</p>
<p>1. <span class="term-important">^ (Power)</span> → أعلى أولوية</p>
<p>2. <span class="term-important">* , /</span> → الضرب والقسمة</p>
<p>3. <span class="term-important">+ , -</span> → الجمع والطرح (أقل أولوية)</p>
<p>الأقواس <code>()</code> بتغير الأولوية - اللي جوا القوس بيتنفذ الأول.</p>`,
          en: `<p>Precedence order from highest to lowest:</p>
<p>1. <span class="term-important">^ (Power)</span> → Highest priority</p>
<p>2. <span class="term-important">* , /</span> → Multiplication and Division</p>
<p>3. <span class="term-important">+ , -</span> → Addition and Subtraction (lowest priority)</p>
<p>Parentheses <code>()</code> override precedence - contents are evaluated first.</p>`
        }
      },
      {
        icon: '➡️',
        title: { ar: '3. تحويل Infix إلى Postfix', en: '3. Converting Infix to Postfix' },
        content: {
          ar: `<p><strong>الخوارزمية (باستخدام Stack):</strong></p>
<p>1. امسح التعبير من <strong>اليسار لليمين</strong>.</p>
<p>2. لو <span class="term-important">رقم/حرف (Operand)</span>: حطه مباشرة في النتيجة (Output).</p>
<p>3. لو <span class="term-important">قوس فتح '('</span>: ادفعه في الـ Stack (Push).</p>
<p>4. لو <span class="term-important">قوس قفل ')'</span>: اعمل Pop من الـ Stack وحط في النتيجة لحد ما تلاقي '(' واحذفه.</p>
<p>5. لو <span class="term-important">عامل (Operator)</span>: لو أولويته أقل من أو تساوي اللي فوق الـ Stack، اعمل Pop الأول وحط في النتيجة، ثم Push العامل الجديد.</p>
<p>6. في الآخر: افرّغ الـ Stack في النتيجة.</p>`,
          en: `<p><strong>Algorithm (using Stack):</strong></p>
<p>1. Scan the expression from <strong>left to right</strong>.</p>
<p>2. If <span class="term-important">operand (number/letter)</span>: add directly to Output.</p>
<p>3. If <span class="term-important">'(' (opening bracket)</span>: Push to Stack.</p>
<p>4. If <span class="term-important">')' (closing bracket)</span>: Pop from Stack to Output until '(' is found, then discard '('.</p>
<p>5. If <span class="term-important">operator</span>: If its precedence ≤ the top of Stack, Pop first and add to Output, then Push the new operator.</p>
<p>6. At the end: Pop all remaining operators to Output.</p>`
        },
        info: {
          ar: 'مثال: A + B * C → الـ Postfix: A B C * +',
          en: 'Example: A + B * C → Postfix: A B C * +'
        }
      },
      {
        icon: '🧮',
        title: { ar: '4. حساب الـ Postfix Expression', en: '4. Evaluating Postfix Expression' },
        content: {
          ar: `<p><strong>الخوارزمية:</strong></p>
<p>1. امسح التعبير من <strong>اليسار لليمين</strong>.</p>
<p>2. لو <span class="term-important">رقم</span>: Push في الـ Stack.</p>
<p>3. لو <span class="term-important">عامل (Operator)</span>: اعمل Pop لعنصرين من الـ Stack، نفذ العملية عليهم، واعمل Push للنتيجة.</p>
<p>4. في الآخر: العنصر المتبقي في الـ Stack هو النتيجة النهائية.</p>`,
          en: `<p><strong>Algorithm:</strong></p>
<p>1. Scan the expression from <strong>left to right</strong>.</p>
<p>2. If <span class="term-important">operand</span>: Push to Stack.</p>
<p>3. If <span class="term-important">operator</span>: Pop two elements, perform the operation, Push the result.</p>
<p>4. At the end: The remaining element in the Stack is the final result.</p>`
        },
        info: {
          ar: 'مثال: 2 3 4 * + = 2 + (3*4) = 2 + 12 = 14',
          en: 'Example: 2 3 4 * + = 2 + (3*4) = 2 + 12 = 14'
        }
      }
    ]
  },

  // ──────────────────────────────────────────────────────────────
  // LECTURE 5: Linked Lists (Part 1 - Singly)
  // ──────────────────────────────────────────────────────────────
  5: {
    id: 5,
    icon: '🔗',
    title: { ar: 'القوائم المتصلة (الجزء الأول)', en: 'Linked Lists (Part 1)' },
    subtitle: { ar: 'Singly Linked List: البنية والعمليات', en: 'Singly Linked List: Structure and Operations' },
    topics: { ar: 'Node, Pointer, Singly Linked List, Insert, Delete, Traverse', en: 'Node, Pointer, Singly Linked List, Insert, Delete, Traverse' },
    sections: [
      {
        icon: '🔗',
        title: { ar: '1. ما هي الـ Linked List؟', en: '1. What is a Linked List?' },
        content: {
          ar: `<p>الـ <span class="term-important">Linked List</span> هي هيكل بيانات خطي بتتكون من مجموعة <span class="term-important">Nodes (عُقد)</span> مرتبطة ببعض عن طريق الـ <span class="term-important">Pointers</span>.</p>
<p>كل Node بتتكون من جزئين:</p>
<p>1. <span class="term-important">Data</span>: البيانات المخزنة.</p>
<p>2. <span class="term-important">Next (Pointer)</span>: عنوان الـ Node اللي بعده في الذاكرة.</p>
<p><strong>الفرق عن الـ Array:</strong></p>
<p>• الـ Array: العناصر <span class="term-important">متجاورة</span> في الذاكرة، حجمها ثابت.</p>
<p>• الـ Linked List: العناصر <span class="term-important">مش متجاورة</span>، حجمها ديناميكي (يزيد وينقص).</p>`,
          en: `<p>A <span class="term-important">Linked List</span> is a linear data structure consisting of <span class="term-important">Nodes</span> connected through <span class="term-important">Pointers</span>.</p>
<p>Each Node consists of two parts:</p>
<p>1. <span class="term-important">Data</span>: The stored value.</p>
<p>2. <span class="term-important">Next (Pointer)</span>: Address of the next Node in memory.</p>
<p><strong>Difference from Array:</strong></p>
<p>• Array: Elements are <span class="term-important">contiguous</span> in memory, fixed size.</p>
<p>• Linked List: Elements are <span class="term-important">not contiguous</span>, dynamic size (grows and shrinks).</p>`
        },
        visualization: {
          type: 'linked-list',
          title: 'Singly Linked List',
          desc: 'Head → Node1 → Node2 → Node3 → NULL',
          data: [10, 20, 30],
          id: 'sll1'
        }
      },
      {
        icon: '💻',
        title: { ar: '2. تعريف الـ Node بـ C++', en: '2. Node Definition in C++' },
        content: {
          ar: `<p>بنعرف الـ Node كـ <span class="term-en">struct</span> في C++:</p>`,
          en: `<p>We define a Node as a <span class="term-en">struct</span> in C++:</p>`
        },
        code: `<span class="hl-keyword">struct</span> <span class="hl-class">Node</span> {
    <span class="hl-type">int</span> data;         <span class="hl-comment">// البيانات</span>
    Node* next;        <span class="hl-comment">// Pointer للعقدة اللي بعدها</span>
};

<span class="hl-comment">// إنشاء Node جديدة</span>
Node* head = <span class="hl-keyword">NULL</span>;
head = <span class="hl-keyword">new</span> Node{<span class="hl-number">10</span>, <span class="hl-keyword">NULL</span>};
head->next = <span class="hl-keyword">new</span> Node{<span class="hl-number">20</span>, <span class="hl-keyword">NULL</span>};
head->next->next = <span class="hl-keyword">new</span> Node{<span class="hl-number">30</span>, <span class="hl-keyword">NULL</span>};`,
        codeTitle: 'Node Struct + Creating Nodes'
      },
      {
        icon: '➕',
        title: { ar: '3. الإضافة في الـ Linked List', en: '3. Insertion in Linked List' },
        content: {
          ar: `<p><strong>ثلاث حالات للإضافة:</strong></p>
<p>1. <span class="term-important">الإضافة في البداية (Insert at Beginning)</span>: الأسرع O(1)</p>
<p>2. <span class="term-important">الإضافة في النهاية (Insert at End)</span>: O(n) لازم نمشي للآخر</p>
<p>3. <span class="term-important">الإضافة في موقع معين (Insert at Position)</span>: O(n)</p>`,
          en: `<p><strong>Three insertion cases:</strong></p>
<p>1. <span class="term-important">Insert at Beginning</span>: Fastest O(1)</p>
<p>2. <span class="term-important">Insert at End</span>: O(n) - must traverse to the end</p>
<p>3. <span class="term-important">Insert at Position</span>: O(n)</p>`
        },
        code: `<span class="hl-comment">// Insert at Beginning</span>
<span class="hl-type">void</span> <span class="hl-function">insertAtBeginning</span>(Node*& head, <span class="hl-type">int</span> val) {
    Node* newNode = <span class="hl-keyword">new</span> Node{val, head};
    head = newNode;
}

<span class="hl-comment">// Insert at End</span>
<span class="hl-type">void</span> <span class="hl-function">insertAtEnd</span>(Node*& head, <span class="hl-type">int</span> val) {
    Node* newNode = <span class="hl-keyword">new</span> Node{val, <span class="hl-keyword">NULL</span>};
    <span class="hl-keyword">if</span> (head == <span class="hl-keyword">NULL</span>) {
        head = newNode;
        <span class="hl-keyword">return</span>;
    }
    Node* temp = head;
    <span class="hl-keyword">while</span> (temp->next != <span class="hl-keyword">NULL</span>)
        temp = temp->next;
    temp->next = newNode;
}`,
        codeTitle: 'Insert Operations'
      },
      {
        icon: '🗑️',
        title: { ar: '4. الحذف والتنقل', en: '4. Deletion and Traversal' },
        content: {
          ar: `<p><strong>التنقل (Traversal):</strong> نمشي من الـ head لحد ما نوصل لـ NULL.</p>
<p><strong>حساب المجموع:</strong></p>`,
          en: `<p><strong>Traversal:</strong> Walk from head until we reach NULL.</p>
<p><strong>Calculating sum:</strong></p>`
        },
        code: `<span class="hl-comment">// Traverse and print all elements</span>
Node* temp = head;
<span class="hl-keyword">while</span> (temp != <span class="hl-keyword">NULL</span>) {
    cout &lt;&lt; temp->data &lt;&lt; <span class="hl-string">" -> "</span>;
    temp = temp->next;
}
cout &lt;&lt; <span class="hl-string">"NULL"</span>;

<span class="hl-comment">// Sum of all elements</span>
<span class="hl-type">int</span> sum = <span class="hl-number">0</span>;
Node* temp = head;
<span class="hl-keyword">while</span> (temp != <span class="hl-keyword">NULL</span>) {
    sum += temp->data;
    temp = temp->next;
}`,
        codeTitle: 'Traversal & Sum'
      }
    ]
  },

  // ──────────────────────────────────────────────────────────────
  // LECTURE 6: Linked Lists (Part 2 - Doubly & Circular)
  // ──────────────────────────────────────────────────────────────
  6: {
    id: 6,
    icon: '🔗',
    title: { ar: 'القوائم المتصلة (الجزء الثاني)', en: 'Linked Lists (Part 2)' },
    subtitle: { ar: 'Doubly Linked List و Circular Linked List', en: 'Doubly & Circular Linked Lists' },
    topics: { ar: 'Doubly LL, Circular LL, مقارنة بين الأنواع', en: 'Doubly LL, Circular LL, Types Comparison' },
    sections: [
      {
        icon: '↔️',
        title: { ar: '1. الـ Doubly Linked List', en: '1. Doubly Linked List' },
        content: {
          ar: `<p>في الـ <span class="term-important">Doubly Linked List</span> كل Node بتحتوي على:</p>
<p>1. <span class="term-important">Data</span>: البيانات.</p>
<p>2. <span class="term-important">Next</span>: Pointer للعقدة اللي بعدها.</p>
<p>3. <span class="term-important">Prev</span>: Pointer للعقدة اللي قبلها.</p>
<p>الميزة: نقدر نمشي في <span class="term-important">الاتجاهين</span> (للأمام وللخلف).</p>
<p>العيب: بتاخد <span class="term-important">مساحة أكبر</span> في الذاكرة بسبب الـ Prev pointer الإضافي.</p>`,
          en: `<p>In a <span class="term-important">Doubly Linked List</span>, each Node contains:</p>
<p>1. <span class="term-important">Data</span>: The stored value.</p>
<p>2. <span class="term-important">Next</span>: Pointer to the next node.</p>
<p>3. <span class="term-important">Prev</span>: Pointer to the previous node.</p>
<p>Advantage: Can traverse in <span class="term-important">both directions</span> (forward and backward).</p>
<p>Disadvantage: Takes <span class="term-important">more memory</span> due to the extra Prev pointer.</p>`
        },
        code: `<span class="hl-keyword">struct</span> <span class="hl-class">DNode</span> {
    <span class="hl-type">int</span> data;
    DNode* next;
    DNode* prev;
};`,
        codeTitle: 'Doubly Linked List Node'
      },
      {
        icon: '🔄',
        title: { ar: '2. الـ Circular Linked List', en: '2. Circular Linked List' },
        content: {
          ar: `<p>في الـ <span class="term-important">Circular Linked List</span> آخر Node بتشاور على أول Node (الـ head) بدل ما تشاور على NULL.</p>
<p>يعني مفيش NULL - القائمة بتلف في <span class="term-important">دائرة</span>!</p>
<p>ممكن تكون:</p>
<p>• <span class="term-important">Singly Circular</span>: كل Node فيها Next بس.</p>
<p>• <span class="term-important">Doubly Circular</span>: كل Node فيها Next و Prev.</p>`,
          en: `<p>In a <span class="term-important">Circular Linked List</span>, the last Node points back to the first Node (head) instead of NULL.</p>
<p>There is no NULL - the list forms a <span class="term-important">circle</span>!</p>
<p>Can be:</p>
<p>• <span class="term-important">Singly Circular</span>: Each Node has only Next.</p>
<p>• <span class="term-important">Doubly Circular</span>: Each Node has both Next and Prev.</p>`
        }
      },
      {
        icon: '📊',
        title: { ar: '3. مقارنة بين الأنواع', en: '3. Comparison of Types' },
        content: {
          ar: `<p><strong>Array vs Linked List:</strong></p>
<p>• <span class="term-important">Array</span>: حجم ثابت، Access سريع O(1)، إضافة/حذف بطيء O(n).</p>
<p>• <span class="term-important">Linked List</span>: حجم ديناميكي، Access بطيء O(n)، إضافة/حذف من البداية سريع O(1).</p>
<p><strong>Singly vs Doubly:</strong></p>
<p>• <span class="term-important">Singly</span>: ذاكرة أقل، تنقل في اتجاه واحد بس.</p>
<p>• <span class="term-important">Doubly</span>: ذاكرة أكتر، تنقل في الاتجاهين.</p>`,
          en: `<p><strong>Array vs Linked List:</strong></p>
<p>• <span class="term-important">Array</span>: Fixed size, Access O(1), Insert/Delete O(n).</p>
<p>• <span class="term-important">Linked List</span>: Dynamic size, Access O(n), Insert/Delete at beginning O(1).</p>
<p><strong>Singly vs Doubly:</strong></p>
<p>• <span class="term-important">Singly</span>: Less memory, one-direction traversal.</p>
<p>• <span class="term-important">Doubly</span>: More memory, bidirectional traversal.</p>`
        }
      }
    ]
  },

  // ──────────────────────────────────────────────────────────────
  // LECTURE 7: Queue (Part 1)
  // ──────────────────────────────────────────────────────────────
  7: {
    id: 7,
    icon: '🚶',
    title: { ar: 'الـ Queue - الطابور (الجزء الأول)', en: 'Queue Data Structure (Part 1)' },
    subtitle: { ar: 'مفهوم FIFO وعمليات Enqueue و Dequeue', en: 'FIFO Concept, Enqueue and Dequeue' },
    topics: { ar: 'FIFO, Enqueue, Dequeue, Front, Rear, Array Implementation', en: 'FIFO, Enqueue, Dequeue, Front, Rear, Array Implementation' },
    sections: [
      {
        icon: '🚶',
        title: { ar: '1. ما هو الـ Queue؟', en: '1. What is a Queue?' },
        content: {
          ar: `<p>الـ <span class="term-important">Queue</span> هو هيكل بيانات خطي بيتبع مبدأ <span class="term-important">FIFO - First In First Out</span> (اللي دخل الأول يخرج الأول).</p>
<p>زي طابور الناس: أول واحد في الطابور هو أول واحد يتخدم.</p>
<p>الـ Queue ليه <span class="term-important">طرفين</span>:</p>
<p>• <span class="term-important">Front (الأمام)</span>: المكان اللي بنحذف منه.</p>
<p>• <span class="term-important">Rear (الخلف)</span>: المكان اللي بنضيف فيه.</p>`,
          en: `<p>A <span class="term-important">Queue</span> is a linear data structure following the <span class="term-important">FIFO - First In First Out</span> principle.</p>
<p>Like a queue of people: the first person in line is the first to be served.</p>
<p>A Queue has <span class="term-important">two ends</span>:</p>
<p>• <span class="term-important">Front</span>: Where elements are removed.</p>
<p>• <span class="term-important">Rear</span>: Where elements are added.</p>`
        },
        visualization: {
          type: 'queue',
          title: 'Queue Visualization',
          desc: 'FIFO - First In First Out',
          data: [5, 10, 3],
          id: 'queue1'
        }
      },
      {
        icon: '⚙️',
        title: { ar: '2. عمليات الـ Queue', en: '2. Queue Operations' },
        content: {
          ar: `<p><strong>العمليات الأساسية:</strong></p>
<p>1. <span class="term-important">Enqueue(x)</span>: إضافة عنصر x في نهاية الطابور (عند الـ Rear).</p>
<p>2. <span class="term-important">Dequeue()</span>: حذف العنصر من أول الطابور (من الـ Front) وإرجاع قيمته.</p>
<p>3. <span class="term-important">Front()</span>: قراءة أول عنصر بدون حذفه.</p>
<p>4. <span class="term-important">isEmpty()</span>: التحقق هل الطابور فاضي.</p>
<p>5. <span class="term-important">isFull()</span>: التحقق هل الطابور ممتلئ.</p>`,
          en: `<p><strong>Basic Operations:</strong></p>
<p>1. <span class="term-important">Enqueue(x)</span>: Add element x at the Rear of the queue.</p>
<p>2. <span class="term-important">Dequeue()</span>: Remove the element from the Front and return its value.</p>
<p>3. <span class="term-important">Front()</span>: Read the front element without removing it.</p>
<p>4. <span class="term-important">isEmpty()</span>: Check if the queue is empty.</p>
<p>5. <span class="term-important">isFull()</span>: Check if the queue is full.</p>`
        }
      },
      {
        icon: '💻',
        title: { ar: '3. تنفيذ الـ Queue باستخدام Array', en: '3. Queue Implementation using Array' },
        content: {
          ar: `<p>بنستخدم Array ومتغيرين <span class="term-en">front</span> و <span class="term-en">rear</span> كلهم يبدأوا من <code>-1</code>.</p>`,
          en: `<p>We use an Array and two variables <span class="term-en">front</span> and <span class="term-en">rear</span>, both starting at <code>-1</code>.</p>`
        },
        code: `<span class="hl-keyword">#define</span> MAX <span class="hl-number">100</span>

<span class="hl-keyword">class</span> <span class="hl-class">Queue</span> {
<span class="hl-keyword">private</span>:
    <span class="hl-type">int</span> arr[MAX];
    <span class="hl-type">int</span> front, rear;
<span class="hl-keyword">public</span>:
    Queue() { front = rear = <span class="hl-number">-1</span>; }

    <span class="hl-type">void</span> <span class="hl-function">enqueue</span>(<span class="hl-type">int</span> x) {
        <span class="hl-keyword">if</span> (rear == MAX - <span class="hl-number">1</span>) {
            cout &lt;&lt; <span class="hl-string">"Queue is Full!"</span>;
            <span class="hl-keyword">return</span>;
        }
        <span class="hl-keyword">if</span> (front == <span class="hl-number">-1</span>) front = <span class="hl-number">0</span>;
        arr[++rear] = x;
    }

    <span class="hl-type">int</span> <span class="hl-function">dequeue</span>() {
        <span class="hl-keyword">if</span> (front == <span class="hl-number">-1</span> || front > rear) {
            cout &lt;&lt; <span class="hl-string">"Queue is Empty!"</span>;
            <span class="hl-keyword">return</span> <span class="hl-number">-1</span>;
        }
        <span class="hl-keyword">return</span> arr[front++];
    }

    <span class="hl-type">bool</span> <span class="hl-function">isEmpty</span>() { <span class="hl-keyword">return</span> front == <span class="hl-number">-1</span> || front > rear; }
};`,
        codeTitle: 'Queue Class - Array Implementation'
      }
    ]
  },

  // ──────────────────────────────────────────────────────────────
  // LECTURE 8: Queue (Part 2 - Circular Queue)
  // ──────────────────────────────────────────────────────────────
  8: {
    id: 8,
    icon: '🔄',
    title: { ar: 'الـ Queue (الجزء الثاني) - Circular Queue', en: 'Queue (Part 2) - Circular Queue' },
    subtitle: { ar: 'الطابور الدائري وأنواع الطوابير', en: 'Circular Queue and Queue Types' },
    topics: { ar: 'Circular Queue, Priority Queue, Deque, المقارنة', en: 'Circular Queue, Priority Queue, Deque, Comparison' },
    sections: [
      {
        icon: '🔄',
        title: { ar: '1. مشكلة الـ Linear Queue', en: '1. Problem with Linear Queue' },
        content: {
          ar: `<p>في الـ Linear Queue العادي لما بنعمل Dequeue، المكان اللي كان فيه العنصر <span class="term-important">بيضيع</span> ومش بنستخدمه تاني!</p>
<p>يعني لو الطابور حجمه 5 وعملنا Enqueue لـ 5 عناصر ثم Dequeue لـ 3، مش هنقدر نضيف غير عنصرين تانيين بالرغم إن في 3 أماكن فاضية!</p>
<p>الحل: <span class="term-important">Circular Queue</span></p>`,
          en: `<p>In a Linear Queue, when we Dequeue, the vacated space is <span class="term-important">wasted</span> and never reused!</p>
<p>If a queue of size 5 has 5 elements enqueued then 3 dequeued, we can only add 2 more despite having 3 empty spaces!</p>
<p>Solution: <span class="term-important">Circular Queue</span></p>`
        }
      },
      {
        icon: '⭕',
        title: { ar: '2. الـ Circular Queue', en: '2. Circular Queue' },
        content: {
          ar: `<p>الـ <span class="term-important">Circular Queue</span> بيحل المشكلة دي عن طريق إن آخر موقع بيشاور على أول موقع (زي الدائرة).</p>
<p>بنستخدم الـ <span class="term-important">Modulo (%)</span> عشان نلف:</p>
<p>• <code>rear = (rear + 1) % MAX</code></p>
<p>• <code>front = (front + 1) % MAX</code></p>
<p><strong>شرط الامتلاء:</strong> <span class="term-important">(rear + 1) % MAX == front</span></p>
<p><strong>شرط الفراغ:</strong> <span class="term-important">front == -1</span></p>`,
          en: `<p>The <span class="term-important">Circular Queue</span> solves this by making the last position point to the first (like a circle).</p>
<p>We use <span class="term-important">Modulo (%)</span> to wrap around:</p>
<p>• <code>rear = (rear + 1) % MAX</code></p>
<p>• <code>front = (front + 1) % MAX</code></p>
<p><strong>Full condition:</strong> <span class="term-important">(rear + 1) % MAX == front</span></p>
<p><strong>Empty condition:</strong> <span class="term-important">front == -1</span></p>`
        },
        code: `<span class="hl-keyword">class</span> <span class="hl-class">CircularQueue</span> {
<span class="hl-keyword">private</span>:
    <span class="hl-type">int</span> arr[MAX];
    <span class="hl-type">int</span> front, rear;
<span class="hl-keyword">public</span>:
    CircularQueue() { front = rear = <span class="hl-number">-1</span>; }

    <span class="hl-type">void</span> <span class="hl-function">enqueue</span>(<span class="hl-type">int</span> x) {
        <span class="hl-keyword">if</span> ((rear + <span class="hl-number">1</span>) % MAX == front) {
            cout &lt;&lt; <span class="hl-string">"Queue Full!"</span>;
            <span class="hl-keyword">return</span>;
        }
        <span class="hl-keyword">if</span> (front == <span class="hl-number">-1</span>) front = <span class="hl-number">0</span>;
        rear = (rear + <span class="hl-number">1</span>) % MAX;
        arr[rear] = x;
    }

    <span class="hl-type">int</span> <span class="hl-function">dequeue</span>() {
        <span class="hl-keyword">if</span> (front == <span class="hl-number">-1</span>) {
            cout &lt;&lt; <span class="hl-string">"Queue Empty!"</span>;
            <span class="hl-keyword">return</span> <span class="hl-number">-1</span>;
        }
        <span class="hl-type">int</span> val = arr[front];
        <span class="hl-keyword">if</span> (front == rear) front = rear = <span class="hl-number">-1</span>;
        <span class="hl-keyword">else</span> front = (front + <span class="hl-number">1</span>) % MAX;
        <span class="hl-keyword">return</span> val;
    }
};`,
        codeTitle: 'Circular Queue Implementation'
      },
      {
        icon: '⭐',
        title: { ar: '3. الـ Priority Queue', en: '3. Priority Queue' },
        content: {
          ar: `<p>في الـ <span class="term-important">Priority Queue</span> كل عنصر ليه <span class="term-important">أولوية (Priority)</span>.</p>
<p>العنصر اللي ليه أعلى أولوية بيخرج الأول بغض النظر عن ترتيب الإدخال.</p>
<p>مثال: غرفة الطوارئ في المستشفى - المريض الأخطر بيتعالج الأول مش اللي جه الأول.</p>`,
          en: `<p>In a <span class="term-important">Priority Queue</span>, each element has a <span class="term-important">priority</span>.</p>
<p>The element with the highest priority is dequeued first, regardless of insertion order.</p>
<p>Example: Hospital ER - the most critical patient is treated first, not the one who arrived first.</p>`
        }
      }
    ]
  },

  // ──────────────────────────────────────────────────────────────
  // LECTURE 9: Trees
  // ──────────────────────────────────────────────────────────────
  9: {
    id: 9,
    icon: '🌳',
    title: { ar: 'الأشجار (Trees)', en: 'Trees' },
    subtitle: { ar: 'Binary Tree, BST, وطرق التنقل (Traversal)', en: 'Binary Tree, BST, and Traversal Methods' },
    topics: { ar: 'Tree, Binary Tree, BST, Inorder, Preorder, Postorder', en: 'Tree, Binary Tree, BST, Inorder, Preorder, Postorder' },
    sections: [
      {
        icon: '🌳',
        title: { ar: '1. ما هي الشجرة (Tree)؟', en: '1. What is a Tree?' },
        content: {
          ar: `<p>الـ <span class="term-important">Tree</span> هو هيكل بيانات <span class="term-important">غير خطي (Non-Linear)</span> بيتكون من <span class="term-important">Nodes</span> مرتبطة بعلاقات هرمية.</p>
<p><strong>المصطلحات الأساسية:</strong></p>
<p>• <span class="term-important">Root</span>: أول Node في الشجرة (الجذر) - مالهاش Parent.</p>
<p>• <span class="term-important">Parent</span>: الـ Node اللي فوق Node معينة.</p>
<p>• <span class="term-important">Child</span>: الـ Nodes اللي تحت Parent معين.</p>
<p>• <span class="term-important">Leaf</span>: الـ Node اللي مالهاش أي Children (ورقة).</p>
<p>• <span class="term-important">Depth</span>: عدد الـ Edges من الـ Root لـ Node معينة.</p>
<p>• <span class="term-important">Height</span>: أطول مسار من Node معينة لأقرب Leaf.</p>
<p>• <span class="term-important">Subtree</span>: أي Node مع كل الـ Descendants بتاعها.</p>`,
          en: `<p>A <span class="term-important">Tree</span> is a <span class="term-important">non-linear data structure</span> consisting of <span class="term-important">Nodes</span> connected by hierarchical relationships.</p>
<p><strong>Key Terminology:</strong></p>
<p>• <span class="term-important">Root</span>: The first Node (has no Parent).</p>
<p>• <span class="term-important">Parent</span>: The Node directly above a given Node.</p>
<p>• <span class="term-important">Child</span>: Nodes directly below a Parent.</p>
<p>• <span class="term-important">Leaf</span>: A Node with no Children.</p>
<p>• <span class="term-important">Depth</span>: Number of edges from the Root to a Node.</p>
<p>• <span class="term-important">Height</span>: Longest path from a Node to a Leaf.</p>
<p>• <span class="term-important">Subtree</span>: Any Node with all its descendants.</p>`
        },
        visualization: {
          type: 'tree',
          title: 'Binary Tree Example',
          data: [[50], [30, 70], [20, 40, 60, 80]],
          id: 'tree1'
        }
      },
      {
        icon: '🌲',
        title: { ar: '2. الـ Binary Tree', en: '2. Binary Tree' },
        content: {
          ar: `<p>الـ <span class="term-important">Binary Tree</span> هي شجرة كل Node فيها ليها <span class="term-important">طفلين كحد أقصى</span> (Left Child و Right Child).</p>
<p><strong>أنواع الـ Binary Tree:</strong></p>
<p>• <span class="term-important">Full Binary Tree</span>: كل Node ليها يا إما 0 أو 2 أطفال.</p>
<p>• <span class="term-important">Complete Binary Tree</span>: كل المستويات ممتلئة ماعدا الأخير اللي بيتملى من الشمال.</p>
<p>• <span class="term-important">Perfect Binary Tree</span>: كل المستويات ممتلئة بالكامل.</p>`,
          en: `<p>A <span class="term-important">Binary Tree</span> is a tree where each Node has <span class="term-important">at most two children</span> (Left Child and Right Child).</p>
<p><strong>Types of Binary Trees:</strong></p>
<p>• <span class="term-important">Full Binary Tree</span>: Every Node has either 0 or 2 children.</p>
<p>• <span class="term-important">Complete Binary Tree</span>: All levels filled except possibly the last, which fills from left.</p>
<p>• <span class="term-important">Perfect Binary Tree</span>: All levels are completely filled.</p>`
        },
        code: `<span class="hl-keyword">struct</span> <span class="hl-class">TreeNode</span> {
    <span class="hl-type">int</span> data;
    TreeNode* left;
    TreeNode* right;
};

TreeNode* <span class="hl-function">createNode</span>(<span class="hl-type">int</span> val) {
    TreeNode* node = <span class="hl-keyword">new</span> TreeNode;
    node->data = val;
    node->left = node->right = <span class="hl-keyword">NULL</span>;
    <span class="hl-keyword">return</span> node;
}`,
        codeTitle: 'Binary Tree Node'
      },
      {
        icon: '🔍',
        title: { ar: '3. الـ Binary Search Tree (BST)', en: '3. Binary Search Tree (BST)' },
        content: {
          ar: `<p>الـ <span class="term-important">BST</span> هي Binary Tree بشرط إضافي:</p>
<p>• كل الـ Nodes اللي في الـ <span class="term-important">Left Subtree</span> قيمتها <span class="term-important">أصغر</span> من الـ Parent.</p>
<p>• كل الـ Nodes اللي في الـ <span class="term-important">Right Subtree</span> قيمتها <span class="term-important">أكبر</span> من الـ Parent.</p>
<p>الميزة: البحث بيكون سريع <span class="term-important">O(log n)</span> في الحالة المتوسطة.</p>`,
          en: `<p>A <span class="term-important">BST</span> is a Binary Tree with an additional condition:</p>
<p>• All Nodes in the <span class="term-important">Left Subtree</span> have values <span class="term-important">less than</span> the Parent.</p>
<p>• All Nodes in the <span class="term-important">Right Subtree</span> have values <span class="term-important">greater than</span> the Parent.</p>
<p>Advantage: Search is fast <span class="term-important">O(log n)</span> on average.</p>`
        }
      },
      {
        icon: '🚶',
        title: { ar: '4. طرق التنقل (Tree Traversal)', en: '4. Tree Traversal Methods' },
        content: {
          ar: `<p>في ثلاث طرق رئيسية للمرور على كل عناصر الشجرة:</p>
<p>1. <span class="term-important">Inorder (LNR)</span>: Left → Node → Right → بتطلع القيم <strong>مرتبة تصاعدياً</strong> في BST!</p>
<p>2. <span class="term-important">Preorder (NLR)</span>: Node → Left → Right → بتبدأ بالـ Root.</p>
<p>3. <span class="term-important">Postorder (LRN)</span>: Left → Right → Node → بتخلّص بالـ Root.</p>`,
          en: `<p>Three main methods to visit all elements of a tree:</p>
<p>1. <span class="term-important">Inorder (LNR)</span>: Left → Node → Right → Gives <strong>sorted ascending</strong> values in BST!</p>
<p>2. <span class="term-important">Preorder (NLR)</span>: Node → Left → Right → Starts with Root.</p>
<p>3. <span class="term-important">Postorder (LRN)</span>: Left → Right → Node → Ends with Root.</p>`
        },
        tip: {
          ar: 'الزتونة: احفظ الحروف: Inorder = LNR, Preorder = NLR, Postorder = LRN. الاسم بيقولك الـ Node (N) فين!',
          en: 'Key Point: Remember: Inorder = LNR, Preorder = NLR, Postorder = LRN. The name tells you where N (Node) is!'
        },
        code: `<span class="hl-comment">// Inorder Traversal (LNR) - Left, Node, Right</span>
<span class="hl-type">void</span> <span class="hl-function">inorder</span>(TreeNode* root) {
    <span class="hl-keyword">if</span> (root == <span class="hl-keyword">NULL</span>) <span class="hl-keyword">return</span>;
    inorder(root->left);      <span class="hl-comment">// L</span>
    cout &lt;&lt; root->data &lt;&lt; <span class="hl-string">" "</span>; <span class="hl-comment">// N</span>
    inorder(root->right);     <span class="hl-comment">// R</span>
}

<span class="hl-comment">// Preorder Traversal (NLR) - Node, Left, Right</span>
<span class="hl-type">void</span> <span class="hl-function">preorder</span>(TreeNode* root) {
    <span class="hl-keyword">if</span> (root == <span class="hl-keyword">NULL</span>) <span class="hl-keyword">return</span>;
    cout &lt;&lt; root->data &lt;&lt; <span class="hl-string">" "</span>; <span class="hl-comment">// N</span>
    preorder(root->left);      <span class="hl-comment">// L</span>
    preorder(root->right);     <span class="hl-comment">// R</span>
}

<span class="hl-comment">// Postorder Traversal (LRN) - Left, Right, Node</span>
<span class="hl-type">void</span> <span class="hl-function">postorder</span>(TreeNode* root) {
    <span class="hl-keyword">if</span> (root == <span class="hl-keyword">NULL</span>) <span class="hl-keyword">return</span>;
    postorder(root->left);      <span class="hl-comment">// L</span>
    postorder(root->right);     <span class="hl-comment">// R</span>
    cout &lt;&lt; root->data &lt;&lt; <span class="hl-string">" "</span>; <span class="hl-comment">// N</span>
}`,
        codeTitle: 'Tree Traversal Methods'
      }
    ]
  }
};
