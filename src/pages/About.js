/** @jsx jsx **/

import React from 'react';
import Navbar from '../components/NavBar';
import { jsx, css } from '@emotion/core';

const About = () => {
  return (
    <div
      css={{
        width: '800px',
        margin: '0px auto',
      }}
    >
      <Navbar />

      <div>
        <h1>About Me</h1>

        <p>Hey there!  I'm Trevor Von Bruenchenhein, and this is my personal website where I can highlight my work and write about some of the things I've been learning and reading into.  I've always been hesitant to publicly state what I've been up to, but I'm currently looking for work, and thought it’d be a good idea to make projects accessible to the public.  On top of that, I figured a personal site would act as an accountability measure, giving me an opportunity to gauge my level of understanding of some of the things I’ve been learning about recently.</p>

        <p>A little bit about me--I went to school for history education back in 2010 and began working at an amazing laboratory school in 2014 immediately following graduation.  Ultimately, I taught there for five years and left in 2019 after the school year completed, and during my time there, I taught a variety of social studies classes to all grade levels.</p>

        <p>Early on in my teaching career, I would sometimes entertain the thought of pursuing something else, but never really considered what my alternatives were.  At some point during my first or second year, I was having a conversation with a veteran teacher I shared an office with about feeling burnt out, and she suggested that she (and most others) feel that same burnout especially during those first few years but would recede after four or five years worth of experience under my belt.  It made sense to me, and so I took her advice and kept moving forward in my career.</p>

        <p>By the end of my fourth year, I began to seriously consider alternative paths, and at this point, I was tinkering with some of the fundamentals of web development in my spare time.  I checked out a few books on programming from the university library and worked my way through a few of the popular free web development courses online.  I wasn’t spending enough time for the concepts and skills to truly sink in, but more importantly, I was hooked.</p>

        <p>I began to consider pursuing software development full-time around at that point, and began consulting family, friends, and even former students that had already established careers in the industry or were at least finishing up computer science degrees at their respective schools.  The feedback was honest and very helpful, and I decided to start looking into going back to school for a computer science degree, even enrolling in introductory computer science and math courses at the local community college to get some of the classes out of the way while I was finishing up the school year.  A few weeks before classes were set to begin, I stumbled upon Lambda School.</p>

        <p>A few of the individuals I religiously follow on Twitter had mentioned Lambda in several threads within a few days of each other, and once I read up on what Lambda School actually was, I couldn't believe how perfect the timing was, considering I was preparing to enroll in a computer science program at a four-year university in less than six months.  The opportunity appeared too good to be true.</p>

        <p>Right away, Lambda appealed to me for a few reasons.  Like everyone else, the Income Share Agreement (ISA) was a preferable alternative to going back to a four-year university (the only path I was seriously considering)--and taking out a loan in order to pay for it.  With the ISA, I wouldn't owe Lambda any money until after I had completed the curriculum and found a job within the industry they’re preparing you for.  Compared to the traditional educational track, choosing this route was a no-brainer.</p>

        <p>On top of the ISA, the accelerated nature of the program was preferable to the university track as well.  Having already obtained a degree and completing half the course load for a master's, I didn't want to spend more time than was necessary to learn how to program.  I wanted to learn it as quickly as possible with the understanding that the accelerated nature might contain some bugs as well.  I figured any topics or concepts that probably deserve more time and focus than they're receiving in an accelerated program could be shored up on my own time, and didn't really consider it to be a major concern that would steer me in another direction.</p>

        <p>After a few weeks of weighing my options, I decided to apply to Lambda.  New cohorts began every four or five weeks, and I decided to apply to the first web development cohort that started after my last school year was completed.</p>

        <p>With the finish line in sight, I’m excited about the things concepts and skills I’ve learned so far, the people I’ve met, and the projects I’ve worked on.  But honestly, I’m most excited about the conceptsI haven’t yet been introduced to, the people I haven’t yet met, and the products I haven’t started.</p>
      </div>
    </div>
  )
}

export default About;