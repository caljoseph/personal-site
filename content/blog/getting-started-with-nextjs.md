---
title: "Wrapping Your Head Around Backpropagation"
date: "2025-04-02"
description: "Let's compute some gradients"
tags: ["ML Theory", "Python", "Algorithms", "Optimization"]
author: "Caleb Bradshaw"
---
---
title: "Wrapping Your Head Around Backpropagation"
date: "2023-03-15"
description: "A beginner-friendly walkthrough of how backpropagation works in neural networks — with math and Python."
tags: ["ML Theory", "Python", "Algorithms", "Optimization"]
author: "Caleb Bradshaw"
---

# Wrapping Your Head Around Backpropagation

Backpropagation is one of the most important concepts in modern machine learning, especially for training neural networks. Despite its foundational role, it’s often treated like a black box. In this guide, we’ll break it down step-by-step, demystify the math, and implement a basic version in Python so you can see it working in action.

## What is Backpropagation?

Backpropagation is an algorithm used to update the weights of a neural network by propagating the error backward from the output layer to the input layer. The goal is to minimize a loss function — a measure of how far off the model's predictions are from the true values — by computing the gradients of the loss with respect to each weight and adjusting the weights in the opposite direction of the gradient.

Think of it as the chain rule of calculus applied repeatedly across all layers of the network.

## The Building Blocks

To understand backpropagation, you need a grasp of:

- **Forward pass**: Computing the output from inputs through the network
- **Loss function**: Measuring the error of the prediction
- **Backward pass**: Using gradients to update weights

Let’s go through each of these.

### 1. The Forward Pass

In a basic neural network with one hidden layer:

```
Input → [Linear Transformation] → Hidden Layer → [Activation] → Output → Loss
```

For a single data point, forward computation might look like:

```python
import numpy as np

# Sample input and true output
x = np.array([[0.5], [0.1]])  # 2x1 input
y_true = np.array([[1.0]])    # 1x1 true output

# Initialize weights and biases
W1 = np.random.randn(3, 2)    # hidden layer weights (3 neurons, 2 inputs)
b1 = np.random.randn(3, 1)
W2 = np.random.randn(1, 3)    # output layer weights (1 output, 3 hidden neurons)
b2 = np.random.randn(1, 1)

# Activation function
def sigmoid(z):
    return 1 / (1 + np.exp(-z))

# Forward pass
z1 = W1 @ x + b1
a1 = sigmoid(z1)
z2 = W2 @ a1 + b2
y_pred = sigmoid(z2)
```

### 2. The Loss Function

We’ll use Mean Squared Error (MSE) for simplicity:

```python
def mse_loss(y_pred, y_true):
    return 0.5 * np.square(y_pred - y_true).sum()

loss = mse_loss(y_pred, y_true)
```

The `0.5` is a convenience — it cancels with the derivative of the square in backpropagation.

### 3. The Backward Pass (Backpropagation)

Now we compute gradients and propagate them backward:

```python
# Derivative of sigmoid
def sigmoid_deriv(z):
    return sigmoid(z) * (1 - sigmoid(z))

# Output layer gradients
dL_dy_pred = y_pred - y_true                         # dL/dŷ
dy_pred_dz2 = sigmoid_deriv(z2)                      # dŷ/dz2
dz2_dW2 = a1.T                                        # dz2/dW2
dz2_da1 = W2.T                                        # dz2/da1

# Gradients for W2 and b2
dL_dz2 = dL_dy_pred * dy_pred_dz2                    # dL/dz2
dL_dW2 = dL_dz2 @ dz2_dW2                            # dL/dW2
dL_db2 = dL_dz2                                      # dL/db2

# Hidden layer gradients
da1_dz1 = sigmoid_deriv(z1)
dL_dz1 = dz2_da1 @ dL_dz2 * da1_dz1                  # dL/dz1
dL_dW1 = dL_dz1 @ x.T                                # dL/dW1
dL_db1 = dL_dz1                                      # dL/db1
```

### 4. Updating the Weights

Using a learning rate to adjust the weights:

```python
lr = 0.1

W2 -= lr * dL_dW2
b2 -= lr * dL_db2
W1 -= lr * dL_dW1
b1 -= lr * dL_db1
```

You’ve just performed one step of training using backpropagation!

## Putting It Together in a Training Loop

Here’s a full training loop to see this in action:

```python
for epoch in range(1000):
    # Forward pass
    z1 = W1 @ x + b1
    a1 = sigmoid(z1)
    z2 = W2 @ a1 + b2
    y_pred = sigmoid(z2)
    loss = mse_loss(y_pred, y_true)

    # Backward pass
    dL_dy_pred = y_pred - y_true
    dy_pred_dz2 = sigmoid_deriv(z2)
    dL_dz2 = dL_dy_pred * dy_pred_dz2
    dL_dW2 = dL_dz2 @ a1.T
    dL_db2 = dL_dz2
    dL_dz1 = W2.T @ dL_dz2 * sigmoid_deriv(z1)
    dL_dW1 = dL_dz1 @ x.T
    dL_db1 = dL_dz1

    # Update weights
    W2 -= lr * dL_dW2
    b2 -= lr * dL_db2
    W1 -= lr * dL_dW1
    b1 -= lr * dL_db1

    if epoch % 100 == 0:
        print(f"Epoch {epoch}, Loss: {loss:.4f}")
```

## Wrapping Up

Backpropagation isn't magic — it’s just calculus, matrix multiplication, and bookkeeping. Once you understand the chain rule and how to compute gradients layer by layer, the whole thing becomes a mechanical process. Most libraries like PyTorch and TensorFlow handle it automatically with autograd, but knowing how it works helps you debug, optimize, and truly understand what your model is doing.

Next steps:
- Try implementing backpropagation for a network with ReLU instead of sigmoid
- Extend it to multiple inputs (batch training)
- Build a training loop for classification using cross-entropy loss

You don’t need to memorize the math — you just need to *understand the flow*.

Happy backpropagating.
