const quiz = [
  // ===================== QC =====================
  {
    name: "Quantum Computing",
    questions: [
      {
        question: "Which unitary operation converts |0⟩ into (|0⟩ + |1⟩)/√2?",
        options: ["Pauli-X gate", "Hadamard gate", "CNOT gate", "Phase gate"],
        correctAnswer: "Hadamard gate"
      },
      {
        question: "Which phenomenon is directly responsible for violating Bell inequalities?",
        options: ["Superposition", "Quantum tunneling", "Entanglement", "Decoherence"],
        correctAnswer: "Entanglement"
      },
      {
        question: "Which algorithm provides exponential speedup for integer factorization?",
        options: ["Grover’s algorithm", "Shor’s algorithm", "Deutsch-Jozsa algorithm", "Simon’s algorithm"],
        correctAnswer: "Shor’s algorithm"
      },
      {
        question: "What is the minimum number of qubits required to represent N classical states?",
        options: ["N", "log₂(N)", "√N", "2N"],
        correctAnswer: "log₂(N)"
      },
      {
        question: "Which noise channel models energy dissipation in a qubit?",
        options: ["Depolarizing channel", "Phase damping channel", "Amplitude damping channel", "Bit-flip channel"],
        correctAnswer: "Amplitude damping channel"
      },
      {
        question: "Which gate set is universal for quantum computation?",
        options: ["{H, T, CNOT}", "{X, Z}", "{H, X}", "{CNOT, Z}"],
        correctAnswer: "{H, T, CNOT}"
      },
      {
        question: "Which quantum principle forbids perfect cloning of an arbitrary unknown quantum state?",
        options: ["Heisenberg uncertainty principle", "No-cloning theorem", "Wave-particle duality", "Born rule"],
        correctAnswer: "No-cloning theorem"
      },
      {
        question: "In Grover’s algorithm, the time complexity is:",
        options: ["O(N)", "O(log N)", "O(√N)", "O(N log N)"],
        correctAnswer: "O(√N)"
      },
      {
        question: "Which representation is used to describe mixed quantum states?",
        options: ["State vector", "Bloch vector", "Density matrix", "Hilbert basis"],
        correctAnswer: "Density matrix"
      },
      {
        question: "Which physical platform uses Josephson junctions to implement qubits?",
        options: ["Trapped ions", "Superconducting circuits", "Photonic qubits", "Topological qubits"],
        correctAnswer: "Superconducting circuits"
      }
    ]
  },

  // ===================== ML =====================
  {
    name: "Machine Learning",
    questions: [
      {
        question: "Which loss function is commonly used for binary classification?",
        options: ["Mean Squared Error", "Cross-entropy loss", "Hinge loss", "Huber loss"],
        correctAnswer: "Cross-entropy loss"
      },
      {
        question: "Which technique is used to prevent overfitting in neural networks?",
        options: ["Batch normalization", "Dropout", "Gradient descent", "Max pooling"],
        correctAnswer: "Dropout"
      },
      {
        question: "Which assumption is violated when multicollinearity occurs?",
        options: ["Independence of features", "Linearity", "Normality of residuals", "Homoscedasticity"],
        correctAnswer: "Independence of features"
      },
      {
        question: "Which kernel trick enables SVMs to perform non-linear classification?",
        options: ["Fourier transform", "Feature space mapping", "Principal Component Analysis", "Softmax activation"],
        correctAnswer: "Feature space mapping"
      },
      {
        question: "Which optimization algorithm adapts learning rates per parameter?",
        options: ["SGD", "Momentum", "Adam", "Newton’s method"],
        correctAnswer: "Adam"
      },
      {
        question: "Which metric is most appropriate for highly imbalanced classification?",
        options: ["Accuracy", "Precision-Recall AUC", "RMSE", "R² score"],
        correctAnswer: "Precision-Recall AUC"
      },
      {
        question: "Which phenomenon causes gradients to become extremely small in deep networks?",
        options: ["Exploding gradient", "Vanishing gradient", "Bias shift", "Covariate drift"],
        correctAnswer: "Vanishing gradient"
      },
      {
        question: "Which dimensionality reduction technique maximizes variance?",
        options: ["LDA", "PCA", "t-SNE", "ICA"],
        correctAnswer: "PCA"
      },
      {
        question: "Which model assumes conditional independence of features?",
        options: ["Naive Bayes", "SVM", "Random Forest", "KNN"],
        correctAnswer: "Naive Bayes"
      },
      {
        question: "Which regularization adds absolute values of weights to loss?",
        options: ["L2", "Elastic Net", "L1", "Dropout"],
        correctAnswer: "L1"
      }
    ]
  },

  // ===================== CRYPTOGRAPHY =====================
  {
    name: "Cryptography",
    questions: [
      {
        question: "Which cryptographic primitive ensures data integrity?",
        options: ["Encryption", "Hashing", "Key exchange", "Nonce"],
        correctAnswer: "Hashing"
      },
      {
        question: "Which attack exploits hash collisions?",
        options: ["Side-channel attack", "Birthday attack", "Replay attack", "Chosen plaintext attack"],
        correctAnswer: "Birthday attack"
      },
      {
        question: "Which algorithm is asymmetric?",
        options: ["AES", "DES", "RSA", "ChaCha20"],
        correctAnswer: "RSA"
      },
      {
        question: "Which property ensures ciphertext reveals no information about plaintext?",
        options: ["Authentication", "Confidentiality", "Perfect secrecy", "Non-repudiation"],
        correctAnswer: "Perfect secrecy"
      },
      {
        question: "Which protocol establishes a shared secret over an insecure channel?",
        options: ["Diffie-Hellman", "SHA-256", "RSA signing", "AES CBC"],
        correctAnswer: "Diffie-Hellman"
      },
      {
        question: "Which cryptosystem is vulnerable to Shor’s algorithm?",
        options: ["AES", "RSA", "SHA-256", "HMAC"],
        correctAnswer: "RSA"
      },
      {
        question: "Which property guarantees sender cannot deny sending a message?",
        options: ["Integrity", "Authentication", "Non-repudiation", "Confidentiality"],
        correctAnswer: "Non-repudiation"
      },
      {
        question: "Which cipher mode provides both confidentiality and integrity?",
        options: ["ECB", "CBC", "CTR", "GCM"],
        correctAnswer: "GCM"
      },
      {
        question: "Which padding scheme is used in RSA encryption?",
        options: ["OAEP", "PKCS#7", "CTR", "Galois padding"],
        correctAnswer: "OAEP"
      },
      {
        question: "Which cryptographic hash is considered broken due to collisions?",
        options: ["SHA-256", "SHA-3", "MD5", "BLAKE2"],
        correctAnswer: "MD5"
      }
    ]
  },

  // ===================== ALGORITHMS =====================
  {
    name: "Algorithms",
    questions: [
      {
        question: "Which sorting algorithm has worst-case O(n²) but average O(n log n)?",
        options: ["Merge sort", "Heap sort", "Quick sort", "Counting sort"],
        correctAnswer: "Quick sort"
      },
      {
        question: "Which data structure supports amortized O(1) push in dynamic arrays?",
        options: ["Linked list", "Vector/ArrayList", "Stack", "Deque"],
        correctAnswer: "Vector/ArrayList"
      },
      {
        question: "Which problem is NP-complete?",
        options: ["Shortest path", "Minimum spanning tree", "Traveling salesman", "Binary search"],
        correctAnswer: "Traveling salesman"
      },
      {
        question: "Which algorithm is used for all-pairs shortest path?",
        options: ["Dijkstra", "Bellman-Ford", "Floyd-Warshall", "Prim"],
        correctAnswer: "Floyd-Warshall"
      },
      {
        question: "Which technique is used in Rabin-Karp string matching?",
        options: ["Dynamic programming", "Rolling hash", "Trie", "Suffix array"],
        correctAnswer: "Rolling hash"
      },
      {
        question: "Which tree is always height-balanced?",
        options: ["BST", "AVL tree", "Trie", "Segment tree"],
        correctAnswer: "AVL tree"
      },
      {
        question: "Which algorithm finds SCCs in directed graphs?",
        options: ["Kruskal", "Tarjan", "Prim", "Dijkstra"],
        correctAnswer: "Tarjan"
      },
      {
        question: "Which problem can be solved using two pointers?",
        options: ["Subset sum", "Two-sum in sorted array", "Graph coloring", "Matrix chain multiplication"],
        correctAnswer: "Two-sum in sorted array"
      },
      {
        question: "Which paradigm is used in Knapsack problem solution?",
        options: ["Greedy", "Divide and conquer", "Dynamic programming", "Backtracking"],
        correctAnswer: "Dynamic programming"
      },
      {
        question: "Which complexity class contains problems verifiable in polynomial time?",
        options: ["NP", "P", "EXP", "BPP"],
        correctAnswer: "NP"
      }
    ]
  },

  // ===================== OS =====================
  {
    name: "Operating Systems",
    questions: [
      {
        question: "Which scheduling algorithm minimizes average waiting time?",
        options: ["FCFS", "Round Robin", "SJF", "Priority scheduling"],
        correctAnswer: "SJF"
      },
      {
        question: "Which condition is NOT necessary for deadlock?",
        options: ["Mutual exclusion", "Hold and wait", "Preemption", "Circular wait"],
        correctAnswer: "Preemption"
      },
      {
        question: "Which page replacement algorithm may suffer from Belady’s anomaly?",
        options: ["LRU", "Optimal", "FIFO", "Clock"],
        correctAnswer: "FIFO"
      },
      {
        question: "Which memory allocation strategy leads to external fragmentation?",
        options: ["Paging", "Segmentation", "Virtual memory", "Demand paging"],
        correctAnswer: "Segmentation"
      },
      {
        question: "Which system call creates a new process in Unix?",
        options: ["exec()", "fork()", "spawn()", "clone()"],
        correctAnswer: "fork()"
      },
      {
        question: "Which scheduling is preemptive?",
        options: ["FCFS", "SJF", "Round Robin", "Priority (non-preemptive)"],
        correctAnswer: "Round Robin"
      },
      {
        question: "Which IPC mechanism uses shared address space?",
        options: ["Message queues", "Pipes", "Shared memory", "Sockets"],
        correctAnswer: "Shared memory"
      },
      {
        question: "Which condition leads to thrashing?",
        options: ["High CPU utilization", "High page fault rate", "Low disk I/O", "Low context switches"],
        correctAnswer: "High page fault rate"
      },
      {
        question: "Which file allocation method avoids external fragmentation?",
        options: ["Contiguous", "Linked", "Indexed", "Extent-based"],
        correctAnswer: "Indexed"
      },
      {
        question: "Which concept ensures only one process accesses critical section at a time?",
        options: ["Deadlock", "Mutual exclusion", "Starvation", "Preemption"],
        correctAnswer: "Mutual exclusion"
      }
    ]
  }
];

export default quiz;
