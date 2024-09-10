import torch
from transformers import pipeline
def summery():
    summarizer = pipeline("summarization", model="t5-base", tokenizer="t5-base", framework="pt")
    txt = """Time management is the process of planning and exercising conscious control of time spent on specific activities—especially to increase effectiveness, efficiency, and productivity.

Time management involves demands relating to work, social life, family, hobbies, personal interests, and commitments. Using time effectively gives people more choices in managing activities.[1] Time management may be aided by a range of skills, tools, and techniques, especially when accomplishing specific tasks, projects, and goals complying with a due date.

Initially, the term time management encompassed only business and work activities, but eventually, the term broadened to include personal activities as well. A time management system is a designed combination of processes, tools, techniques, and methods. Time management is usually a necessity in any project management, as it determines the project completion time and scope."""

    summary = summarizer(txt, max_length=179, min_length=10, do_sample=False) 

    # print(summary[0]["summary_text"])
    return summary[0]["summary_text"]


